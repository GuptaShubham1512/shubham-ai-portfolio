import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">

        <span className="contact-tag">
          LET'S CONNECT
        </span>

        <h2>
          Let's
          <span>Work Together.</span>
        </h2>

        <p className="contact-description">
          Have a project, job opportunity, or an idea you'd
          like to discuss? I'm always open to connecting
          and exploring meaningful opportunities.
        </p>

        <div className="contact-card">

          <div className="contact-card-header">
            <div>
              <h3>Get In Touch</h3>

              <p>
                Choose your preferred way to contact me.
              </p>
            </div>

            <div className="contact-online">
              <span></span>
              Available
            </div>
          </div>

          <div className="contact-options">

            {/* GMAIL */}
            <a
              href="mailto:shubhamkrgupta15@gmail.com?subject=Job Opportunity - Shubham Gupta"
              className="contact-option"
              aria-label="Contact Shubham Gupta via Gmail"
            >
              <div className="contact-option-icon">
                ✉
              </div>

              <div className="contact-option-text">
                <span>Email</span>

                <strong>
                  Contact via Gmail
                </strong>
              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/7479774187?text=Hi%20Shubham%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
              aria-label="Contact Shubham Gupta via WhatsApp"
            >
              <div className="contact-option-icon">
                💬
              </div>

              <div className="contact-option-text">
                <span>WhatsApp</span>

                <strong>
                  Let's Chat
                </strong>
              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;