import { prisma } from "@/app/utils/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
    include: { organizer: true },
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8 border-b pb-6">
        <Link
          href="/events"
          className="flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition"
        >
          <span className="cursor pointer mr-2">←</span> Back to Events
        </Link>

        <div className="flex gap-3">
          <Link
            href={`/events/${id}/update`}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm active:scale-95"
          >
            Edit Event
          </Link>
          <Link
            href={`/events/${id}/delete`}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm active:scale-95"
          >
            Delete Event
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 flex items-end">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {event.title}
          </h1>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-sm font-uppercase tracking-wider text-gray-400 font-bold mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">
            <div>
              <p className="text-xs font-bold text-gray-400">Date</p>
              <p className="text-gray-900 font-medium">
                {new Date(event.date).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400">Venue</p>
              <p className="text-gray-900 font-medium">{event.venue}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400">Ticket Price</p>
              <p className="text-2xl font-bold text-blue-600">
                ${event.ticketPrice.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
