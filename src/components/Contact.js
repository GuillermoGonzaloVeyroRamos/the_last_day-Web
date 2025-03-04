import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    try {
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mwpvnjgp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Your message has been sent. We will contact you soon!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was a problem sending your message. Please try again later.'
      });
      console.error('Form submission error:', error);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-banner">
        <div className="banner-overlay"></div>
        <h2 className="contact-page-title">Contact Us</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about The Last Day? Want to report a bug or suggest a feature? Fill out the form and our team will get back to you as soon as possible.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <i className="contact-icon email-icon"></i>
              <span>support@thelastday.com</span>
            </div>
            <div className="contact-method">
              <i className="contact-icon discord-icon"></i>
              <span>Join our Discord</span>
            </div>
            <div className="contact-method">
              <i className="contact-icon twitter-icon"></i>
              <span>@TheLastDayGame</span>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className="form-success">
                {formStatus.message}
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                {formStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;