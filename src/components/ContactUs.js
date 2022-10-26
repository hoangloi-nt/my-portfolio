import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_2b44aop",
        "template_1hepgyi",
        form.current,
        "-hfqE6au47LE7MSe1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Send message sucessfully!");
          document.querySelector("form").reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Can not send message!");
          document.querySelector("form").reset();
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-start justify-center max-w-xl text-xl gap-y-5"
    >
      <label className="text-xl font-semibold text-text">Name</label>
      <input
        type="text"
        name="user_name"
        className="w-full px-5 py-2 text-lg border border-text bg-light dark:bg-dark text-text dark:text-slate-400 border-solid rounded-xl"
        placeholder="Enter your name"
        required
      />
      <label className="text-lg font-semibold lg:text-xl text-text">
        Email
      </label>
      <input
        type="email"
        name="user_email"
        className="w-full px-5 py-2 text-lg border border-text bg-light dark:bg-dark text-text dark:text-slate-400 border-solid rounded-xl"
        placeholder="Enter your email address"
        required
      />
      <label className="text-lg font-semibold lg:text-xl text-text">
        Message
      </label>
      <textarea
        name="message"
        className="w-full px-5 py-2 text-lg border border-text dark:bg-dark text-text dark:text-slate-400 border-solid min-h-[150px] rounded-xl"
        placeholder="Enter your message"
        required
      />

      <input
        className="text-center mx-auto w-[200px] py-3 lg:text-2xl text-lg font-semibold cursor-pointer text-text dark:text-slate-400 border border-text border-solid rounded-full dark:z-[3] hover:bg-text hover:text-white bg-light dark:bg-dark"
        type="submit"
        value="Send"
      />
    </form>
  );
};
