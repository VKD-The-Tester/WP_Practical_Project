import { z } from "zod";

const createEvent = async () => {};

const createEventSchema = z.object({
  title: z.string().nonempty({ error: "The title field cannot be empty." }),
  description: z.string().optional(),
  venue: z.string().nonempty({ error: "The venue field cannot be empty." }),
  date: z
    .date()
    .nonoptional({ error: "A date should be provided in the date field." }),
  ticketPrice: z
    .number()
    .nonoptional({
      error: "A ticket price should be provided in the ticket price field.",
    }),
});
