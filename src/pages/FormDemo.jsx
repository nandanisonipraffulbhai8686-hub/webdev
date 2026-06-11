import { useState } from "react";

function FormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dept: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.dept.trim()) newErrors.dept = "Department is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", dept: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="form-demo-page">
        <div className="form-card success-card">
          <div className="success-icon">✅</div>
          <h2>Form Submitted!</h2>
          <div className="success-details">
            <p><span>Name</span><strong>{formData.name}</strong></p>
            <p><span>Email</span><strong>{formData.email}</strong></p>
            <p><span>Department</span><strong>{formData.dept}</strong></p>
          </div>
          <button className="btn btn-primary" onClick={handleReset}>
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-demo-page">
      <div className="form-card">
        <h1>Employee Registration</h1>
        <p className="form-subtitle">Fill in your details below</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span className="error-msg" id="name-error">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span className="error-msg" id="email-error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dept">Department</label>
            <input
              id="dept"
              type="text"
              name="dept"
              placeholder="e.g. Engineering"
              value={formData.dept}
              onChange={handleChange}
              className={errors.dept ? "input-error" : ""}
              aria-describedby={errors.dept ? "dept-error" : undefined}
            />
            {errors.dept && (
              <span className="error-msg" id="dept-error">{errors.dept}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormDemo;
