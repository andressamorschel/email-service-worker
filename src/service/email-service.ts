
// import nodemailer from "nodemailer";
import fs from 'fs';

export const sendMail = (message: any) => {
    console.log(`MAIL_HOST: ${process.env.MAIL_HOST}`)
    
    // const transporter = nodemailer.createTransport({
    //     service: process.env.MAIL_HOST,
    //     auth: {
    //         user: process.env.MAIL_USERNAME,
    //         pass: process.env.MAIL_PASSWORD
    //     }
    // });

    const mailOptions = buildEmailOptions(message);

    console.log(`mailOptions: ${mailOptions}`);

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log(`Cannot send email, error: ${error}`);
    //     } else {
    //         console.log(`Email sent: ${info.response}`);
    //     }
    // });
}

const buildEmailOptions = (message: any) => {
    const htmlTemplatePath = `../resources/${message.template}`;
    console.log(`htmlTemplatePath: ${htmlTemplatePath}`);

    const htmlContent = fs.readFileSync(htmlTemplatePath, 'utf-8');
    console.log(`htmlContent: ${htmlContent}`);

    return {
        from: "andressamorschel@gmail.com",
        to: message.destinations,
        subject: "Hello from the other side!",
        html: htmlContent
    };
}