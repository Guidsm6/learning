import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #301111;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: "Arial Bold";
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Welcome!</h1>
    </StyledHeader>
  );
};

export default Header;
