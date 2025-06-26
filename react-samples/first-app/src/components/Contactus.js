import { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData); // log before setting state to avoid stale log
      setErrors({});
      setSubmittedData(formData);

      const response=await axios.post("http://localhost:5000/messages",formData);
      console.log(response.data);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate className="mb-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="alert alert-success">
          Thank you, <strong>{submittedData.name}</strong>! We'll contact you at{" "}
          <em>{submittedData.email}</em>.
        </div>
      )}
    </div>
  );
}

export default ContactUs;
