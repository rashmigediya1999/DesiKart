import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(
  "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"
);

const sendWelcomeEmail = (email, fname, lname) => {
  sgMail
    .send({
      to: email,
      from: "naitik.uwaterloo@gmail.com",
      subject: "Thanks for join in !",
      text: `Dear ${fname} ${lname},\n\nWelcome to Desikart, your one-stop-shop for all your Indian grocery needs! We are excited to have you as a new member of our community.\n\nThank you for choosing Desikart! We look forward to serving you and providing you with the best shopping experience possible.\n\nBest regards,\nDesiKart Team`,
    })
    .then(() => {
      // console.log("Send done!")
    })
    .catch((error) => {
      // console.error(error.message)
    });
};

module.exports = {
  sendWelcomeEmail,
};
