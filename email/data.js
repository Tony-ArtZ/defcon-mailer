import fs from "fs";
export const body = (email, qr, name) => ({
  from: `Game Master <gamemaster@email.d3fc0n.tech>`,
  to: email,
  subject: `DefCon Entry Pass for ${name}`,
  html: fs.readFileSync("mailTemplate.html", "utf-8"),
  attachments: [
    {
      filename: "pass.png",
      content: qr.split("base64,")[1],
      encoding: "base64",
    },
  ],
});
