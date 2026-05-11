"use server";

import { hashPassword } from "@/app/utils/password";
import { prisma } from "@/app/utils/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().nonoptional({ error: "Name is required" }),
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .max(64, { error: "Password must not exceed 64 characters" })
    .min(8, { error: "Password must be at least 8 characters" })
    .trim(),
});

const register = async (prevState: any, formData: FormData) => {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const { name, email, password } = result.data;

  const user = await prisma.user.findUnique({ where: { email: email } });

  if (user) {
    return {
      errors: {
        email: ["A user with this email already exists"],
      },
    };
  }

  const hashedPassword = await hashPassword(password);

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  return redirect("/auth/login");
};

export default register;
