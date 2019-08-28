// @flow
import React from "react";

type HeaderProps = {
  title: string
};

export const Header = ({ title }: HeaderProps) => {
  return <h1>{title}</h1>;
};

export default Header;
