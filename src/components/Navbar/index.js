// @flow
import React from "react";

type NavbarProps = {
  logo: any,
  title: string,
  user: string
};

export const Navbar = ({ logo, title, user }: NavbarProps) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          className="rounded-circle"
          src={logo.src}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt={logo.alt}
        />
        {title}
      </a>
      <form className="form-inline">
        <span class="navbar-text">{user}</span>
      </form>
    </nav>
  );
};

export default Navbar;
