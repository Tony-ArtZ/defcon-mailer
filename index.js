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
    const users = await User.find({}).select("_id email name").limit(2);

    for (const user of users) {
      const qr = await QRCode.toDataURL(user.id);
      //TODO: Use user.email
      const testEmail = "";
      await sendEmail(testEmail, qr, user.name);
    }
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

generateQRCodes();
