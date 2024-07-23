"use server"
import { createTransport } from 'nodemailer';

export default async function POST(req, res) {
    const data = await req.body
    const {
        name,
        tel,
        email,
        message,
    } = data

    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // tls: {
        //     ciphers: "SSLv3",
        //     rejectUnauthorized: false,
        // },

        auth: {
            user: process.env.MAILER_ADRESS,
            pass: process.env.MAILER_PASSWORD
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: `TSF Foundation`,
            to: 'scientifiquesaletranger@gmail.com',
            subject: `TSF foundation message received`,
            html: `
                <p>Name: ${name} </p>
                <p>telephone: ${tel} </p>
                <p>Email: ${email} </p>
                <p>Message: ${message} </p>
            `,
        })
        res.status(200).json({ message: "email was sent" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }

}
