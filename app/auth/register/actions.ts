"use server";

import { z } from "zod";

const registerSchema = z.object({
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .max(64, { error: "Password must not exceed 64 characters" })
    .min(8, { error: "Password must be at least 8 characters" })
    .trim(),
});

const register = async () => {};
