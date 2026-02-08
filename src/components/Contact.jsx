import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_c0q7e2b",        // ✅ your real service id
        "template_i3gxy4u",      // 🔴 replace with YOUR template id
        form.current,
        "ZJxvEYYaYlgGPx3Kg"     // 🔴 replace with YOUR public key
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌ Check IDs");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 text-center scroll-mt-24"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

      {/* Contact Form Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Send me a message
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border p-3 rounded-lg focus:outline-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border p-3 rounded-lg focus:outline-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="border p-3 rounded-lg focus:outline-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`py-3 rounded-lg text-white transition
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}




