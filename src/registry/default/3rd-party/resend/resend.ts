import type { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_FROM = "Auth-CN <onboarding@resend.dev>";

export async function sendEmail({
  to,
  subject,
  react,
  from = DEFAULT_FROM,
}: {
  to: string;
  subject: string;
  react: ReactNode;
  from?: string;
}) {
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    react,
  });

  if (error) {
    console.error("Error sending email:", error);
    return;
  }

  console.log("Email sent:", data);
}
