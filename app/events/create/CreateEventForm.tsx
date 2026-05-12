"use client";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { createEvent } from "./actions";

const CreateEventForm = () => {
  const [state, createAction] = useActionState(createEvent, undefined);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2x1">
        <div className="max-w-2xl mx-auto font-sans">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Create an Event
          </h1>
          <form className="space-y-5" action={createAction}>
            <div className="flex flex-col">
              <label
                htmlFor="createTitle"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="createTitle"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
              {state?.errors?.title && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                  {state.errors.title}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="createDescription"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="createDescription"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
              {state?.errors?.description && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                  {state.errors.description}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="createVenue"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Venue:
              </label>
              <input
                type="text"
                name="venue"
                id="createVenue"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
              {state?.errors?.venue && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                  {state.errors.venue}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="createDate"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Date:
              </label>
              <input
                type="date"
                name="date"
                id="createDate"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="createTicketPrice"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Ticket Price:
              </label>
              <input
                type="number"
                name="ticketPrice"
                id="createTicketPrice"
                step="0.01"
                placeholder="0.00"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              />
              {state?.errors?.ticketPrice && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                  {state.errors.ticketPrice}
                </p>
              )}
            </div>
            <div>
              <CreateButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CreateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="cursor-pointer w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
      disabled={pending}
      type="submit"
    >
      Create Event
    </button>
  );
};

export default CreateEventForm;
