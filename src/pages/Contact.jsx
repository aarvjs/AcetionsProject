import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const stylesheet = `

  .contact-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contact-container {
    width: 100%;
    max-width: 1300px;
    padding: 80px 30px;
  }

  /* TITLE */
  .contact-title {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
  }

  .title-line {
    width: 5px;
    background: #2da3df;
  }

  .title-text small {
    color: #2da3df;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .title-text h1 {
    font-size: 38px;
    font-weight: 800;
    margin-top: 10px;
    line-height: 1.2;
  }

  /* CONTENT */
  .contact-content {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 50px;
  }

  /* FORM */
  .contact-form input,
  .contact-form textarea {
  input : 50px;
    width: 100%;
    padding: 16px;
    background: #f3f3f3;
    border: none;
    margin-bottom: 18px;
    font-size: 14px;
    outline: none;
  }

  .contact-form textarea {
    height: 200px;
    resize: none;
  }

  .contact-form button {
    width: 100%;
    padding: 16px;
    background: #7cc4e8;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .contact-form button:hover {
    background: #5ab0dc;
  }

  /* RIGHT INFO */
  .contact-info {
    background: #f7f7f7;
    padding: 30px;
  }

  .info-item {
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
    align-items: flex-start;
  }

  .info-icon {
    font-size: 28px;
    color: #2da3df;
    margin-top: 4px;
  }

  .info-text h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .info-text p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }

  /* MAP */
  .map-box {
    width: 100%;
    height: 220px;
    margin-top: 14px;
  }

  .map-box iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
  }
`;

const ContactUs = () => {
  return (
    <>
      <style>{stylesheet}</style>

      <div className="contact-wrapper">
        <div className="contact-container">

          {/* TITLE */}
          <div className="contact-title">
            <div className="title-line"></div>
            <div className="title-text">
              <small>CONTACT US</small>
              <h1>
                PLEASE FEEL FREE TO <br /> CONTACT US
              </h1>
            </div>
          </div>

          {/* CONTENT */}
          <div className="contact-content">

            {/* LEFT FORM */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="button">SEND MESSAGE</button>
            </form>

            {/* RIGHT INFO + MAP */}
            <div className="contact-info">

              <div className="info-item">
                <IoLocationOutline className="info-icon" />
                <div className="info-text">
                  <h4>MEHRA SHOES</h4>
                  <p>
                    123/768-76-A8 Fazalganj, Factory Area<br />
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="info-item">
                <IoLocationOutline className="info-icon" />
                <div className="info-text">
                  <h4>MEHRA APPARELS & EQUINE MAKERS</h4>
                  <p>
                    123/772A Factory Area, Fazalganj<br />
                    Kanpur, Uttar Pradesh
                  </p>

                  <div className="map-box">
                    <iframe
                      src="https://www.google.com/maps?q=Fazalganj%20Kanpur&output=embed"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
