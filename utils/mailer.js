import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";
import "dotenv/config";
import { body } from "../email/data.js";

const auth = {
  auth: {
    api_key: process.env.MG_API,
    domain: process.env.MG_DOMAIN,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export const sendEmail = async (email, qr, name) => {
  await nodemailerMailgun.sendMail(body(email, qr, name));
};
