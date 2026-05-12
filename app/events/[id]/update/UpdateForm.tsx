"use client";

import { useActionState } from "react";
import { updateEvent } from "./actions";

const UpdateForm = ({ event }: { event: any }) => {
  const [state, updateAction] = useActionState(updateEvent, undefined);
  return (
    <form className="space-y-5" action={updateAction}>
      <input type="hidden" name="id" value={event?.id} />
      <div className="flex flex-col">
        <label
          htmlFor="updateTitle"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="updateTitle"
          defaultValue={event?.title}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {state?.errors?.title && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            {state.errors.title}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="updateDescription"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <input
          type="text"
          name="description"
          id="updateDescription"
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
          defaultValue={event?.description ?? ""}
        />
        {state?.errors?.description && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            {state.errors.description}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="updateVenue"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Venue:
        </label>
        <input
          type="text"
          name="venue"
          id="updateVenue"
          defaultValue={event?.venue}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {state?.errors?.venue && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            {state.errors.venue}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="updateDate"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Date:
        </label>
        <input
          type="date"
          name="date"
          id="updateDate"
          defaultValue={
            event?.date ? new Date(event.date).toISOString().slice(0, 16) : ""
          }
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="updateTicketPrice"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Ticket Price:
        </label>
        <input
          type="number"
          name="ticketPrice"
          id="updateTicketPrice"
          step="0.01"
          placeholder="0.00"
          defaultValue={
            event?.ticketPrice ? Number(event?.ticketPrice) : undefined
          }
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {state?.errors?.ticketPrice && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            {state.errors.ticketPrice}
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="cursor-pointer w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Update Event
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
