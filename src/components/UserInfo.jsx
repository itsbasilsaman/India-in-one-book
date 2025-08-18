import React, { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../assets/holiday-hacker.png";
import emailjs from "emailjs-com"; // Import EmailJS

function UserInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [pdfReady, setPdfReady] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // EmailJS Configuration
      const serviceId = "service_jgsdt93";
      const templateId = "template_6wpfifn";
      const publicKey = "i59QbXYafBQFzo94w";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_number: formData.phone,
        to_name: "Holiday Hacker",
      };

      // Send Email
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setFormData({ name: "", email: "", confirmEmail: "", phone: "" });
          setPdfReady(true); 
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <main className="w-full lg:h-auto py-[120px] flex justify-center items-center bg-gray-100 relative">
      <Link to={"/"}>
        <div className="flex justify-center items-center gap-[6px] absolute lg:top-[10%] top-[5%] left-[4%]">
          <FaCircleArrowLeft className="text-[23px]" />{" "}
          <span className="text-[19px]">Back to Home</span>
        </div>
      </Link>
      <section className="w-[360px] lg:w-[800px] h-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src={Image}
            alt="Holiday Hacker Illustration"
            className="w-[120px] object-cover rounded-full border-4 border-indigo-500"
          />
        </div>

        {!pdfReady ? (
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="lg:col-span-2">
              <label htmlFor="name" className="block text-left pl-[10px] text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block pl-[10px] text-sm font-medium text-left text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="confirmEmail" className="block text-sm pl-[10px] text-left font-medium text-gray-700">
                Confirm Email
              </label>
              <input
                type="email"
                id="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                placeholder="Confirm your email"
                className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.confirmEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmEmail}</p>}
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="phone" className="block pl-[10px] text-left text-sm font-medium text-gray-700">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your WhatsApp number"
                className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full bg-black text-white py-[13px] px-4 rounded-[1000px] shadow hover:bg-gray-800 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 flex justify-center">
            <a
              href="https://togetherformanymiles.com/Holiday-Hacker.pdf"
              download="Holiday-Hacker.pdf"
              className="bg-gray-200 text-black py-3 font-semibold px-6 no-underline rounded-lg shadow border border-black transition duration-200 hover:bg-gray-300"
            >
              Click To Download PDF
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

export default UserInfo;
