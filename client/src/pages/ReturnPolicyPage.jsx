import "../styles/Policy.scss";

const ReturnPolicyPage = () => {
  return (
    <div className="policy">
      <h1>Return & Refund Policy</h1>
      <p>Effective Date: June 20, 2025</p>

      <section>
        <h2>1. Overview</h2>
        <p>
          At ViaStay, we strive to provide you with the best booking
          experience. However, if you are not entirely satisfied with your
          booking, we’re here to help.
        </p>
      </section>

      <section>
        <h2>2. Cancellations</h2>
        <p>
          You may cancel your booking according to the cancellation policy
          stated on the listing page. Cancellations made:
        </p>
        <ul>
          <li>More than 7 days before check-in: Full refund</li>
          <li>Within 7 days before check-in: 50% refund</li>
          <li>On or after check-in: No refund</li>
        </ul>
      </section>

      <section>
        <h2>3. Refund Eligibility</h2>
        <p>You may be eligible for a refund under the following conditions:</p>
        <ul>
          <li>The host cancels your booking</li>
          <li>The listing was misleading or significantly inaccurate</li>
          <li>You were unable to access the property</li>
        </ul>
      </section>

      <section>
        <h2>4. How to Request a Refund</h2>
        <p>
          To request a refund, please contact our support team at{" "}
          <strong>support@ViaStay.com</strong>
          within 24 hours of check-in with photos or other relevant evidence.
        </p>
      </section>

      <section>
        <h2>5. Refund Process</h2>
        <p>
          Once your refund is approved, it will be processed to your original
          payment method within 5–10 business days.
        </p>
      </section>

      <section>
        <h2>6. Non-Refundable Cases</h2>
        <p>Refunds will not be issued in the following cases:</p>
        <ul>
          <li>Change of plans or personal circumstances</li>
          <li>Late check-in or early check-out</li>
          <li>Violation of host rules</li>
        </ul>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions, feel free to reach out to us at{" "}
          <strong>support@ViaStay.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default ReturnPolicyPage;
