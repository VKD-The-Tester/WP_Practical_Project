"use client";

import { POST } from "@/app/api/events/routes";
import { FormEvent } from "react";

const CreateEventForm = () => {
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      venue: formData.get("venue"),
      date: formData.get("date"),
      ticketPrice: formData.get("ticketPrice"),
    };

    try {
      await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      window.location.href = "/events";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create an Event</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
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
        </div>
        <div>
          <button type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
