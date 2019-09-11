// @flow
import React from "react";

import "./index.scss";

type NavbarProps = {
  title: string,
  user: string
};

export const Navbar = ({ title, user }: NavbarProps) => {
  return (
    <nav className="navbar navbar-light h-100">
      <a className="navbar-brand" href="#">
        <span className="navbar-title">
          <h3>
            <b>{title}</b>
          </h3>
        </span>
      </a>
      <form className="form-inline">
        <span class="navbar-userprofile">{user}</span>
      </form>
    </nav>
  );
};

export default Navbar;
