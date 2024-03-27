import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  process.env.MONGODB_CONNECTION_STRING ||
  "mongodb+srv://argunbarkhas:Uyjfi7kTOripbf6A@barkhas.nvwdbbi.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);
  try {
    await connect(CONNECTION_STRING), console.log("Success connected to DB");
  } catch (err) {
    console.log("DB connection to Unsuccessful");
  }
};
