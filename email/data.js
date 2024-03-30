import Mailgun from "mailgun-js";
// const fs = require('fs');
import fs from "fs";

export const body = (attachment, email) => ({
  from: `Game Master <gamemaster@email.d3fc0n.tech>`,
  to: email,
  subject: "DefCon Entry Pass",
  html: fs.readFileSync("mailTemplate.html", "utf-8"),
  attachment: attachment,
});
