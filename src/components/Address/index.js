// @flow
import React from "react";

type AddressProps = {
  word: string
};

export const Address = ({ word }: AddressProps) => {
  return <address>{word}</address>;
};

export default Address;
