"use server";

import { prisma } from "@/app/utils/prisma";
import { redirect } from "next/navigation";

const deleteEvent = async (prevState: any, formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.event.delete({ where: { id: id } });
  redirect("/events");
};

export default deleteEvent;
