import React from "react";

const SocialGroupBtn = ({ className = "", className2 = "" }) => {
  return (
    <div
      className={`flex items-center lg:justify-start text-center w-full h-full ${className2}`}
    >
      <div className={`social-icons ${className}`}>
        <a
          href="https://www.facebook.com/nguyentranhoang.loi/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nguyen-tran-hoang-loi/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/hoangloi-nt"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:hoangloi015@gmail.com" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialGroupBtn;
