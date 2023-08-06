import * as React from "react"

const Form = () => (
  <form
    className="form"
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />

    <div className="form__group">
      <label htmlFor="name" className="form__group--label">
        Name
      </label>
      <input
        type="text"
        className="form__group--input"
        placeholder="Your Name"
        name="name"
        id="name"
        required
      />
    </div>

    <div className="form__group">
      <label htmlFor="email" className="form__group--label">
        Email
      </label>
      <input
        type="text"
        className="form__group--input"
        placeholder="Your Email"
        name="email"
        id="email"
        required
      />
    </div>

    <div className="form__group">
      <label htmlFor="message" className="form__group--label">
        Message
      </label>
      <textarea
        className="form__group--input"
        placeholder="Your Message"
        name="message"
        id="message"
        rows="8"
      />
    </div>

    <button type="submit" name="submit" className="btn btn-submit">
      Send message
    </button>
  </form>
)

export default Form
