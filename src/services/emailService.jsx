import axios from 'axios';

const sendEmail = async (name, email, message) => {
  // Your EmailJS service ID, template ID, and Public Key
  const serviceId = 'service_3fv984d';
  const templateId = 'template_lx6dfsb';
  const publicKey = 'xv5J8Oir6LzecqfVc';

  // Create an object with EmailJS service ID, template ID, Public Key, and Template params
  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: name,
      from_email: email,
      to_name: 'Edu-pie Global',
      message: message,
    }
  };

  try {
    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    return res.data;
  } catch (error) {
    throw new Error('Failed to send message. Please try again later.');
  }
};

export default sendEmail;
