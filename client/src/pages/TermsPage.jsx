import React from "react";
import "../styles/TermsPage.scss";
import { FaCheckCircle } from "react-icons/fa";

const TermsPage = () => {
  return (
    <div className="terms">
      <div className="terms_header">
        <h1>Terms and Conditions</h1>
        <p>Last updated: June 2025</p>
      </div>

      <div className="terms_content">
        <section>
          <h2>
            <FaCheckCircle className="icon" /> Acceptance of Terms
          </h2>
          <p>
            By accessing or using DreamNest, you agree to be bound by these
            terms. If you do not agree, please do not use our service.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> User Responsibilities
          </h2>
          <p>
            Users must provide accurate information, maintain the
            confidentiality of their accounts, and not misuse or disrupt the
            platform.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> Booking and Cancellation
          </h2>
          <p>
            Bookings are subject to host approval. Cancellation policies may
            vary per listing and are clearly displayed before booking.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> Content Ownership
          </h2>
          <p>
            Users retain rights to their content. By uploading, you grant
            DreamNest a non-exclusive license to use, display, and distribute
            your content.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate any account that
            violates these terms or poses a security risk.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> Limitation of Liability
          </h2>
          <p>
            DreamNest is not liable for indirect damages, including loss of
            income or data arising from platform use.
          </p>
        </section>

        <section>
          <h2>
            <FaCheckCircle className="icon" /> Updates to Terms
          </h2>
          <p>
            We may update these terms occasionally. Changes will be communicated
            via email or on our platform.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
