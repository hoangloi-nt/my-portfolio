import DarkmodeButton from "components/DarkmodeButton";
import FixedMenu from "components/FixedMenu";
import MenuMobile from "components/MenuMobile";
import MenuMobileIcons from "components/MenuMobileIcons";
import Overlay from "components/Overlay";
import React, { useEffect, useState } from "react";

const menuNav = [
  {
    url: "#",
    title: "Home",
  },
  {
    url: "#about",
    title: "About",
  },
  {
    url: "#projects",
    title: "Projects",
  },
  {
    url: "#skills",
    title: "Skills",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFixedMenu, setShowFixedMenu] = useState(false);

  const header = document.querySelector("header");
  const headerHeight = header && header.offsetHeight;
  // eslint-disable-next-line no-restricted-globals
  let width = screen.width;

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrollY = window.pageYOffset;
      if (scrollY >= headerHeight && width > 768) {
        setShowFixedMenu(true);
      } else {
        setShowFixedMenu(false);
      }
    });
  }, [headerHeight, width]);

  document.addEventListener("click", function (e) {
    if (e.target.matches(".overlay")) {
      setShowMenu(false);
    }
  });

  return (
    <header className="container">
      <div className="items-center justify-between hidden lg:flex gap-x-20">
        {menuNav.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="text-lg font-medium text-primary dark:text-white"
          >
            {item.title}
          </a>
        ))}
        <div className="flex items-center justify-center ml-auto gap-x-20">
          <a
            href="#contact"
            className="px-5 py-2 text-lg font-medium border rounded-full dark:text-white text-secondary border-primary dark:border-white"
          >
            Contact
          </a>
          <DarkmodeButton></DarkmodeButton>
        </div>
      </div>

      <FixedMenu menuNav={menuNav} showFixedMenu={showFixedMenu}></FixedMenu>

      <MenuMobileIcons
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      ></MenuMobileIcons>

      <Overlay showMenu={showMenu}></Overlay>

      <MenuMobile showMenu={showMenu} menuNav={menuNav}></MenuMobile>
    </header>
  );
};

export default Header;
