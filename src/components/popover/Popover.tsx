import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.base};
`;

type Props = {
  text: string;
};

const Popover: React.FC<Props> = ({ text }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span>Hover me</span>
      </div>
      {open && (
        <div>
          <span>{text}</span>
        </div>
      )}
    </Container>
  );
};

export default Popover;
