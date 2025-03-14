import { useState } from "react";
import Card from "./Card";
import "./styles.css";
import axios from "axios";

export default function EmailForm() {
  const [emailData, setEmailData] = useState("");
  const [error, setError] = useState(""); //  error messages
  const [successMessage, setSuccessMessage] = useState(""); //  success messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    if (!emailData) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(emailData)) {
      setError("Please enter a valid email address");
      return;
    }

    // Check if email ends with @ez.works
    if (emailData.endsWith("@ez.works")) {
      setError("Email ending with @ez.works is not allowed");
      return;
    }

    try {
      // Make API request
      const response = await axios.post("http://3.228.97.110:9000/api", {
        email: emailData,
      });

      if (response.status === 200) {
        setSuccessMessage("Form Submitted");
        setError("");
        setEmailData("");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Email ending with @ez.works is not allowed");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="parent-container">
      <form className="Left-container" onSubmit={handleSubmit}>
        <h1 className="hero-txt">EZ Works</h1>
        <h2>Suit Of Business Support Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          expedita amet molestias fugiat quibusdam consequatur nisi, a in,
          placeat temporibus dolorum libero reprehenderit. Id consequuntur quas
          tempore labore nobis. Sint!
        </p>
        <input
          type="text"
          placeholder="Email Address"
          className="input-field"
          name="email"
          value={emailData}
          onChange={(e) => setEmailData(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" className="btn">
          Contact Us
        </button>
      </form>

      {/* Card container */}
      <div className="Right-container">
        <Card />
      </div>
    </div>
  );
}
