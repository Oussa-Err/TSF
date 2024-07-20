"use server"
import Email from '@/model/Email';
import DbConnect from '@/lib/DbConnect';

export default async function POST(email) {
  await DbConnect();

  try {
    const emailData = await Email.create({ email });
    
    return {
      status: "success",
      data: emailData,
    };
  } catch (err) {
    return {
      status: "error",
      errMsg: err.message,
    };
  }
}