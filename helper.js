const nodemailer = require("nodemailer");
const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "yumminvn@gmail.com",
    pass: "yxozncomimjlscxt",
  },
});

const sendMail = ({
  fullName,
  phone,
  address,
  quantity,
  message,
  ...restOfOptions
}) => {
  const options = {
    from: "yumminvn@gmail.com",
    to: "tanprox2@gmail.com",
    subject: "Đặt mua robot hút bụi nhật bản",
    html: `
    Có người đặt mua rô bốt hút bụi thành công
    <p>
    Họ và tên: ${fullName || ""}
    </p>
    <p>
    Số điện thoại: ${phone || ""}
    </p>
    <p>
    Địa chỉ: ${address || ""}
    </p>
    <p>
    Số lượng: ${quantity || ""}
    </p>
    <p>
    Lời nhắn: ${message || ""}
    </p>
    `,
  };

  return smtp.sendMail(options);
};

module.exports = {
  sendMail: sendMail,
};
