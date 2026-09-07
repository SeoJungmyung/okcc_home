/**
 * 이메일 발송 유틸리티 (Nodemailer)
 */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * @param {string} to - 수신자 이메일
 * @param {string} subject - 제목
 * @param {string} html - HTML 본문
 */
const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.MAIL_FROM || 'OKCC <noreply@okcc.ca>',
    to,
    subject,
    html,
  };
  return transporter.sendMail(mailOptions);
};

// 이메일 템플릿들
const templates = {
  welcome: (name) => `
    <h2>환영합니다, ${name}님!</h2>
    <p>오타와한인교회(OKCC)에 오신 것을 환영합니다.</p>
    <p>저희와 함께 하나님을 예배해요.</p>
    <p><a href="${process.env.CLIENT_URL}">okcc.ca 방문하기</a></p>
  `,
  resetPassword: (link) => `
    <h2>비밀번호 재설정</h2>
    <p>아래 링크를 클릭하여 비밀번호를 재설정하세요:</p>
    <p><a href="${link}">비밀번호 재설정</a></p>
    <p>링크는 1시간 동안 유효합니다.</p>
  `,
};

module.exports = { sendMail, templates };
