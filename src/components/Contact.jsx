import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    lname: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState({ mes: "", isSuccess: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.lname || !form.email || !form.message) {
        return setMsg({ ...msg, mes: "All fields must be filled" });
      }
      const formData = {
        name: form.lname,
        email: form.email,
        message: form.message,
      };
      const response = await axios.post(
        "https://backend-url/api/contact",
        formData
      );
      setMsg({ mes: response.data.message, isSuccess: true });
      setForm({ lname: "", email: "", message: "" });
    } catch (error) {
      return setMsg(
        error.response?.data?.error || "Something went wrong..Try again later"
      );
    }
  };

  return (
    <>
      <section id="contact" className="">
        <div className="w-full py-6">
          <div className="card flex flex-col items-center justify-center rounded-3xl shadow-xl/30 w-2/3 mx-auto py-5">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">
              Contact Me
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full sm:px-8 text-white mx-auto flex flex-col gap-4"
            >
              <input
                type="text"
                value={form.lname}
                onChange={(e) => setForm({ ...form, lname: e.target.lname })}
                placeholder="Your Name"
                className="font-semibold p-3 border border-white rounded-xl placeholder-white"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.email })}
                placeholder="Your Email"
                className="text-semibold p-3 border border-white rounded-xl placeholder-white"
              />
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.message })
                }
                placeholder="Your Message"
                rows="5"
                className="text-semibold p-3 border border-white rounded-xl placeholder-white"
              ></textarea>
              {msg && (
                <p
                  className={`font-semibold text-sm ${
                    msg.isSuccess ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {msg.mes}
                </p>
              )}
              <div className="flex items-center justify-center mt-3">
                <button className="bg-white text-[#820E70] font-semibold px-6 py-3 rounded-3xl cursor-pointer hover:bg-[#820E70] hover:text-white transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
