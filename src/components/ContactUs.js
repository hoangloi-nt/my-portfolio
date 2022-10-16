import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      className="flex flex-col items-start justify-center max-w-2xl text-xl gap-y-5"
    >
      <label className="text-2xl font-semibold text-primary dark:text-white">
        Name
      </label>
      <input
        type="text"
        name="user_name"
        className="w-full p-5 border border-black border-solid"
        placeholder="Enter your name"
      />
      <label className="text-2xl font-semibold text-primary dark:text-white">
        Email
      </label>
      <input
        type="email"
        name="user_email"
        className="w-full p-5 border border-black border-solid"
        placeholder="Enter your email address"
      />
      <label className="text-2xl font-semibold text-primary dark:text-white">
        Message
      </label>
      <textarea
        name="message"
        className="w-full p-5 border border-black border-solid min-h-[200px]"
        placeholder="Enter your message"
      />

      <input
        className="w-full px-10 py-5 text-2xl font-semibold text-white cursor-pointer bg-gradient-to-r from-primary via-secondary to-third hover:animate-pulse dark:z-[3]"
        type="submit"
        value="Send"
      />
    </form>
  );
};
