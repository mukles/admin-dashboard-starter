import * as z from 'zod';

export const emailSchema = z.string().email({ message: 'Invalid email address' });
export const passwordSchema = z.string().min(6, { message: 'Password must be at least 6 characters' });

export const loginValidationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerValidationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
