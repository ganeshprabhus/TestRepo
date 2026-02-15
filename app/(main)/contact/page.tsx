"use client";
import ScrollReveal from "@/app/components/ScrollReveal";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const INQUIRY_TEMPLATE_ID = "template_n0gv0pg";
  const AUTO_REPLY_TEMPLATE_ID = "template_hnq0hnc";
  const SERVICE_ID = "service_q2lzgiq";
  const PUBLIC_KEY = "CezeFwP7RzMoPhGY6";

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsSending(true);
    setMessage("");
    setMessageType("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const userData = {
      name: formData.get("name") as string,
      organization: (formData.get("organization") as string) || "Not provided",
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      await emailjs.send(SERVICE_ID, INQUIRY_TEMPLATE_ID, userData, PUBLIC_KEY);

      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          to_name: userData.name,
          to_email: userData.email,
          name: userData.name,
          email: userData.email,
        },
        PUBLIC_KEY
      );

      setMessage(
        "Thank you! Your message has been sent and a confirmation email is on its way."
      );
      setMessageType("success");
      form.reset();

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 6000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Failed to send. Please try again or email directly.");
      setMessageType("error");

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 6000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl text-center gold-text mb-8 sm:mb-12">
              Contact Aravind V.K.
            </h2>
            <p className="text-gray-300 text-center text-lg sm:text-xl mb-6 sm:mb-8">
              For creative collaborations, educational projects, media
              interactions and corporate sessions
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl border gold-border/50">
              <form onSubmit={handleContactSubmit}>
                {/* Name + Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 bg-black border gold-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      required
                      disabled={isSending}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full p-3 bg-black border gold-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      disabled={isSending}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 bg-black border gold-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    required
                    disabled={isSending}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message (Collaboration Details)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 bg-black border gold-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    required
                    disabled={isSending}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full cta-button px-6 py-3 rounded-full text-base sm:text-lg uppercase font-bold tracking-wider hover:scale-[1.02] transition duration-300 ${
                    isSending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSending ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>

              {message && (
                <div
                  id="contact-message"
                  className={`mt-4 p-3 rounded-lg text-center gold-text border font-medium transition-all duration-300 ${
                    messageType === "success"
                      ? "bg-green-900/50 border-green-500"
                      : "bg-red-900/50 border-red-500"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
