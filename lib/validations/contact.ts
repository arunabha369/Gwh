import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .trim()
    .max(25, { message: "Phone number is too long" })
    .optional()
    .or(z.literal("")),
  service: z
    .enum(["website", "app", "saas", "ai", "automation", "other"], {
      message: "Please select what you need",
    })
    .default("app"),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
