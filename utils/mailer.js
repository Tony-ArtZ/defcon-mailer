import Mailgun from "mailgun-js";
import "dotenv/config";
import { body } from "../email/data.js";

const mailer = Mailgun({
  apiKey: process.env.MG_API,
  domain: process.env.MG_DOMAIN,
});

export const sendEmail = async (qrBase64String, email) => {
  const qrBuffer = Buffer.from(qrBase64String, "base64");
  const attachment = new mailer.Attachment({
    data: qrBuffer,
    filename: "pass.png",
  });
  await mailer.messages().send(body(attachment, email));
};
