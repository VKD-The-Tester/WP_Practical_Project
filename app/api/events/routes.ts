import { prisma } from "@/app/utils/prisma";
import { request } from "http";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    const event = await prisma.event.create({ data: { ...data } });

    return NextResponse.json(event);
  } catch (error) {
    console.error("Error creating event: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};

export const GET = async (request: Request) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error retrieving events: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
