
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="faq">
          <h2>Common Questions</h2>
          <p>
            <strong>What is your return policy?</strong>
            <br/>
            Our return policy allows for returns within 30 days of purchase. Please refer to our Returns & Exchanges page for more information.
          </p>
          <p>
            <strong>How can I track my order?</strong>
            <br/>
            Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your order on our website.
          </p>
          <p>
            <strong>Do you offer international shipping?</strong>
            <br/>
            Yes, we offer international shipping to select countries. Please check our Shipping & Delivery page for more details.
          </p>
          <p>
            <strong>What payment methods do you accept?</strong>
            <br/>
            We accept all major credit cards, as well as PayPal and Apple Pay.
          </p>
          <p>
            <strong>How can I contact customer support?</strong>
            <br/>
            You can reach our customer support team by email at support@example.com or by phone at 1-800-123-4567. Our support hours are Monday to Friday, 9am to 5pm.
          </p>
        </div>
    </footer>
  );
};

export default Footer;


