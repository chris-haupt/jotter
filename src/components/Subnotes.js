import React from "react";
import styled from "styled-components";
import Subnote from "./Subnote";

export default function Subnotes({ subnotes, isEditing, setNote }) {
  return (
    <Container>
      {subnotes &&
        subnotes.map((item, index) => {
          return (
            <Subnote note={item} setNote={setNote} isEditing={isEditing} key={index} />
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: -30px;
  background: orange;
  z-index: -1;
  border: 1px solid blue;

  &:nth-child(2) {
    background: red;
  }
`;
