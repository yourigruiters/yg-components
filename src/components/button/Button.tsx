import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const StyledButton = styled.button``;

type Props = {
  text: string;
  title?: string;
};

const Button: React.FC<Props> = ({ text, title = "" }) => {
  return (
    <Container>
      <StyledButton title={title ? title : text}>{text}</StyledButton>
    </Container>
  );
};

export default Button;
