"use server";

import { z } from "zod";
// 1. Install Resend: npm install resend
import { Resend } from "resend";

// 2. Create a new Resend instance and add your API key to .env.local
// const resend = new Resend(process.env.RESEND_API_KEY);

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
    // 3. Uncomment the code below to send an email with Resend.
    // Make sure to replace "your_email@example.com" with your actual email address.
    /*
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'your_email@example.com',
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    */

    // The line below is a placeholder. You can remove it when you set up a real email service.
    await new Promise(resolve => setTimeout(resolve, 1000));

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
