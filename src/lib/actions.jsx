import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

function openMailto(name, email, message) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const link = document.createElement("a");
  link.href = `mailto:tsumbedzomatloga@gmail.com?subject=${subject}&body=${body}`;
  link.click();
}

export async function submitContactForm(formData) {
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

  const formId = import.meta.env.VITE_FORMSPREE_ID;
  console.log("Formspree ID:", formId);

  if (formId) {
    try {
      console.log("Sending to Formspree...");
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log("Formspree response:", response.status, data);

      if (response.ok) {
        return {
          message: "Thank you! Your message has been sent successfully.",
          errors: null,
          success: true,
        };
      }
    } catch (err) {
      console.warn("Formspree failed, falling back to mailto:", err);
    }
  }

  openMailto(name, email, message);

  return {
    message: "Your email app has opened. Please send the message from there.",
    errors: null,
    success: true,
  };
}
