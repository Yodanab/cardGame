import { ZodError, z } from "zod";

const requiredString = z.string().min(1, {
  message: "This field is required",
});

export const SignUpSchema = z
  .object({
    userName: requiredString,
    password: z.string().min(6, {
      message:
        "Password must contain at least 6 character(s)",
    }),
    confirmPassword: z.string(),
    email: z.string().email({
      message: "Please enter a valid email",
    }),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export const LoginSchema = z.object({
  userName: requiredString,
  password: requiredString,
});

export function extractErrorsMessage(
  zodError: ZodError
) {
  return zodError.issues.map(
    (issue) =>
      `${issue.path[0]}: ${issue.message}`
  );
}
