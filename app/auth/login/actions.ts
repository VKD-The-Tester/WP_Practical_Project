"use server";

import { comparePasswords } from "@/app/utils/password";
import { prisma } from "@/app/utils/prisma";
import { createSession, deleteSession } from "@/app/utils/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .max(65, { error: "Password must not exceed 64 characters" })
    .min(8, { error: "Password must be at least 8 characters" })
    .trim(),
});

export const login = async (prevState: any, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const { email, password } = result.data;

  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  const isCorrectPassword = await comparePasswords(password, user.password);

  if (!isCorrectPassword) {
    return { errors: { email: ["Invalid email or password"] } };
  }

  const sessionPayload = { sub: user.id, email: user.email, name: user.name };

  await createSession(sessionPayload);

  redirect("/events");
};

export const logout = async () => {
  await deleteSession();
  redirect("/");
};
