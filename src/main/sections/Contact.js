import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_x3b6hwb',
      'template_qljctsc',
      toSend,
      'nNfPPqTKlASgD5TvX',
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <span>Interested in collaborating?</span>
      <h1>Get started</h1>
      <span>You can use this form to send me an email so that we can get in touch</span>
      <div>
        <form onSubmit={onSubmit}>
          <div className="mt-3 mb-3">
            <input
              className="form-control"
              id="name"
              type="text"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="message"
              style={{ height: '100px' }}
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              id="email"
              type="text"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
