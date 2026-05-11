import { prisma } from "@/app/utils/prisma";
import UpdateForm from "./UpdateForm";

const UpdateEventPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2x1">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Edit Event</h2>
          <p className="text-gray-600">You can only edit your own events.</p>
        </div>
        <div>
          <UpdateForm event={event} />
        </div>
      </div>
    </div>
  );
};

export default UpdateEventPage;
