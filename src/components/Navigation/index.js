// @flow
import React from "react";

type NavigationProps = {
  L: string,
  M: string,
  R: string,
  U: String
};
export const Navigation = ({ U, L, M, R }: NavigationProps) => {
  return (
    <>
      {" "}
      <button type="button" class="btn btn-secondary">
        {U}
      </button>
      <br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          {L}
        </button>
        <button type="button" class="btn btn-secondary">
          {M}
        </button>
        <button type="button" class="btn btn-secondary">
          {R}
        </button>
      </div>
    </>
  );
};

export default Navigation;
