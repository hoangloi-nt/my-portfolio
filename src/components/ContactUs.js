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
      className="flex flex-col items-start justify-center max-w-xl text-xl gap-y-5"
    >
      <label className="text-xl font-semibold text-primary dark:text-white">
        Name
      </label>
      <input
        type="text"
        name="user_name"
        className="w-full px-5 py-2 text-lg border border-black border-solid"
        placeholder="Enter your name"
      />
      <label className="text-lg font-semibold lg:text-xl text-primary dark:text-white">
        Email
      </label>
      <input
        type="email"
        name="user_email"
        className="w-full px-5 py-2 text-lg border border-black border-solid"
        placeholder="Enter your email address"
      />
      <label className="text-lg font-semibold lg:text-xl text-primary dark:text-white">
        Message
      </label>
      <textarea
        name="message"
        className="w-full px-5 py-2 text-lg border border-black border-solid min-h-[150px]"
        placeholder="Enter your message"
      />

      <input
        className="w-full px-10 py-5 lg:text-xl text-lg font-semibold text-white cursor-pointer bg-gradient-to-r from-primary via-secondary to-third hover:animate-pulse dark:z-[3]"
        type="submit"
        value="Send"
      />
    </form>
  );
};
