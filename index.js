import "dotenv/config";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import QRCode from "qrcode";
import { sendEmail } from "./utils/mailer.js";
await mongoose.connect(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const generateQRCodes = async () => {
  try {
    const users = await User.find({}).select("_id email");

    for (const user of users) {
      const qr = await QRCode.toDataURL(user.id);
      await sendEmail(user.email, qr);
    }
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

generateQRCodes();
