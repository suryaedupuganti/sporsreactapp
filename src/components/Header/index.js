// @flow
import React from "react";

type HeaderProps = {
  title: string
};

export const Header = ({ title }: HeaderProps) => {
  return <h1><b>{title}</b></h1>;
};

export default Header;
