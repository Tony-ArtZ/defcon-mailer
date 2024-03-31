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
    //TODO: RemoveLimiter
    const users = await User.find({}).select("_id email name roll").skip(33);

    for (const user of users) {
      const qr = await QRCode.toDataURL(user.roll);

      //TODO: Use user.email
      const testEmail = user.email;
      await sendEmail(testEmail, qr, user.name);
      console.log(`Email sent to ${testEmail}`);
      console.log(`QR Code generated for ${user.name}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

generateQRCodes();
