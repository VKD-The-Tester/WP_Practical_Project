import { prisma } from "@/app/utils/prisma";

const UpdateEventPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2x1">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Edit Event</h2>
          <p className="text-gray-600">You can only edit your own events.</p>
        </div>
        <div>
          <form className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="deleteTitle"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="deleteTitle"
                defaultValue={event?.title}
                readOnly
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="deleteDescription"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="deleteDescription"
                readOnly
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
                defaultValue={event?.description ?? ""}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="deleteVenue"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Venue:
              </label>
              <input
                type="text"
                name="venue"
                id="deleteVenue"
                readOnly
                defaultValue={event?.venue}
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="deleteDate"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Date:
              </label>
              <input
                type="date"
                name="date"
                id="deleteDate"
                readOnly
                defaultValue={
                  event?.date
                    ? new Date(event.date).toISOString().slice(0, 16)
                    : ""
                }
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="deleteTicketPrice"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Ticket Price:
              </label>
              <input
                type="number"
                name="ticketPrice"
                id="deleteTicketPrice"
                step="0.01"
                placeholder="0.00"
                readOnly
                defaultValue={
                  event?.ticketPrice ? Number(event?.ticketPrice) : undefined
                }
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="cursor-pointer w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.98]"
              >
                Delete Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEventPage;
