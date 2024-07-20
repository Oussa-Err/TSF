"use server"
import Email from '@/model/Email';
import DbConnect from '@/lib/DbConnect';

export default async function POST(req, res) {
  await DbConnect();
  console.log(req.body)
  const {email} = req.body

  try {
    const emailData = await Email.create({ email });

    res.status(200).json({
      status: "success",
      data: emailData,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "error",
      errMsg: "Could NOT subscribe to newLetter"
    });
  }
}