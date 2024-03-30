import Mailgun from "mailgun-js";

export const body = (attachment, email) => ({
  from: `Game Master <gamemaster@email.d3fc0n.tech>`,
  to: email,
  subject: "DefCon Entry Pass",
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">      
      <p style="text-align: center; color: #1a1a1a;">Regards,<br />Here is your Pass</p>
      </div>
    `,
  attachment: attachment,
});
