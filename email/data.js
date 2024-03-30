export const body = (email, qr, name) => ({
  from: `Game Master <gamemaster@email.d3fc0n.tech>`,
  to: email,
  subject: `DefCon Entry Pass for ${name}`,
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">      
      <p style="text-align: center; color: #1a1a1a;">Regards,<br />Here is your Pass, ${name}</p>
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
