export const body = (email, qr) => ({
  from: `Game Master <gamemaster@email.d3fc0n.tech>`,
  to: email,
  subject: "DefCon Entry Pass",
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">      
      <p style="text-align: center; color: #1a1a1a;">Regards,<br />Here is your Pass</p>
      </div>
    `,
  attachments: [
    {
      filename: "pass.png",
      content: qr.split("base64,")[1],
      encoding: "base64",
    },
  ],
});
