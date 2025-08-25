import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res
            .status(400)
            .json({ error: "Name, email, and message are required" });
    }

    // Create transporter for Gmail with App Password
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // your Gmail address
            pass: process.env.EMAIL_PASS, // Gmail App Password, NOT your regular password
        },
    });

    const mailOptionsToOwner = {
        from: `"Tube Search User" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    const mailOptionsAutoReply = {
        from: `"Tube Search Support" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for contacting, ${name}!`,
        text: `Hi ${name},\n\nThank you for reaching out! We will get back to you soon.\n\nBest regards.\nMirage Kamran`,
    };

    try {
        await transporter.sendMail(mailOptionsToOwner);
        await transporter.sendMail(mailOptionsAutoReply);
        return res.status(200).json({ message: "Emails sent successfully." });
    } catch (error) {
        console.error("Error sending emails:", error);
        return res.status(500).json({ error: "Failed to send emails." });
    }
}
