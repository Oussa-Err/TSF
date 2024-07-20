"use server"
import mongoose from "mongoose";

let cached = { conn: null, promise: null };

export const DbConnect = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            dbName: "Email",
        };

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
            console.log("Database Connected successfully")
            return mongoose
        }).catch((err) => console.log(err))
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export default DbConnect
