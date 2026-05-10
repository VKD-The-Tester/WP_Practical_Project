"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .max(65, { error: "Password must not exceed 64 characters" })
    .min(8, { error: "Password must be at least 8 characters" })
    .trim(),
});

const login = async () => {};

const logout = async () => {};
