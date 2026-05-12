"use server";

import { prisma } from "@/app/utils/prisma";
import { decrypt } from "@/app/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const createEventSchema = z.object({
  title: z.string().min(1, { error: "The title field cannot be empty." }),
  description: z.string().optional(),
  venue: z.string().min(1, { error: "The venue field cannot be empty." }),
  date: z.coerce.date({
    error: "A date should be provided in the date field.",
  }),
  ticketPrice: z.coerce.number({
    error: "A ticket price should be provided.",
  }),
});

export const createEvent = async (prevState: any, formData: FormData) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);

  const result = createEventSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const { title, description, venue, date, ticketPrice } = result.data;

  await prisma.event.create({
    data: {
      title: title,
      description: description,
      venue: venue,
      date: date,
      ticketPrice: ticketPrice,
      organizer: { connect: { id: session?.sub } },
    },
  });

  redirect("/events");
};
