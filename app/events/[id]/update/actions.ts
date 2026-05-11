"use server";

import { prisma } from "@/app/utils/prisma";
import { redirect } from "next/navigation";

import { z } from "zod";

const updateSchema = z.object({
  title: z.string().min(1, { error: "Title is required" }),
  description: z.string().optional(),
  venue: z.string().min(1, { error: "Venue is required" }),
  date: z.coerce.date({ error: "Date is required" }),
  ticketPrice: z.coerce
    .number()
    .positive("Ticket price must be greater than 0"),
});

export const updateEvent = async (prevState: any, formData: FormData) => {
  const id = formData.get("id") as string;
  const result = updateSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const { title, description, venue, date, ticketPrice } = result.data;

  await prisma.event.update({
    where: { id: id },
    data: {
      title: title,
      description: description,
      venue: venue,
      date: new Date(date),
      ticketPrice: ticketPrice,
    },
  });

  return redirect("/events");
};
