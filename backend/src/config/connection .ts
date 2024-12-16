import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionDB = async () => {
 await mongoose
    .connect(process.env.DB_URI as string)
    .then(() => {
      console.log(`datanbase is connected successfully`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectionDB;
