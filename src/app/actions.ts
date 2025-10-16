"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Resend API key is not configured.");
      return {
        message: "Contact form is not configured. Please contact the site administrator.",
        errors: null,
        success: false,
      };
    }
    
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'tsumbedzomatloga@gmail.com',
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return {
      message: "Thank you! Your message has been sent successfully.",
      errors: null,
      success: true,
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      message: "Something went wrong. Please try again later.",
      errors: null,
      success: false,
    };
  }
}
