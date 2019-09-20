// @flow
import React from "react";

import "./index.scss";

type NavbarProps = {
  title1: string,
  title2: string,
  user: string
};

export const Navbar = ({ title1, title2, user }: NavbarProps) => {
  return (
    <nav className="navbar navbar-light h-100">
      <a className="navbar-brand" href="#">
        <span className="navbar-title">
          <span class="text-uppercase font-weight-bold font-italic">
            {title1}
          </span>
          <span> {title2}</span>
        </span>
      </a>
      <form className="form-inline">
        <span class="navbar-userprofile">{user}</span>
      </form>
    </nav>
  );
};

export default Navbar;
