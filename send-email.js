const nodemailer = require('nodemailer');
const { GITHUB_RUN_ID } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'someshforaws@gmail.com',
        pass: 'Secure*12'
    }
});

const mailOptions = {
    from: 'someshforaws@gmail.com',
    to: 'someswararao.m@gmail.com',
    subject: 'Test Results',
    text: `Test results are available at: https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});