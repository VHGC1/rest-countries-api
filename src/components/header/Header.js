import React from "react";
import Dark from "../dark/Dark";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <Dark/>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
