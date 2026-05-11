import Link from "next/link";
import { prisma } from "../utils/prisma";
import { Prisma } from "../generated/prisma/browser";

const ListEventsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { queryByTitle, queryByVenue, queryByDate, queryByTicketPrice } =
    searchParams;

  const andFilters: Prisma.EventWhereInput[] = [];

  if (queryByTitle) {
    andFilters.push({
      title: { contains: String(queryByTitle), mode: "insensitive" },
    });
  }

  if (queryByVenue) {
    andFilters.push({
      venue: { contains: String(queryByVenue), mode: "insensitive" },
    });
  }

  if (queryByDate) {
    andFilters.push({ date: new Date(queryByDate as string) });
  }

  if (queryByTicketPrice) {
    andFilters.push({ ticketPrice: { lte: Number(queryByTicketPrice) } });
  }

  const events = await prisma.event.findMany({
    where: { AND: andFilters },
    orderBy: { createdAt: "desc" },
    include: { organizer: true },
  });
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Events</h1>
        <form className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            name="queryByTitle"
            placeholder="Search Events By Title"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <input
            type="text"
            name="queryByVenue"
            placeholder="Search Events By Venue"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <input
            type="date"
            name="queryByDate"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <input
            type="number"
            name="queryByTicketPrice"
            step="0.01"
            placeholder="0.00"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button
            type="submit"
            className="cursor-pointer w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h2>

                <p className="text-gray-600">{event.venue}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span>{event.date.toDateString()}</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    €{event.ticketPrice.toString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:justify-between sm:items-center">
                <span className="text-sm text-gray-500">
                  Hosted by{" "}
                  <span className="font-medium text-gray-700">
                    {event.organizer.name}
                  </span>
                </span>

                <Link
                  href={`/events/${event.id}`}
                  className="group inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-700"
                >
                  Event Details
                  <span className="cursor-pointer ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListEventsPage;
