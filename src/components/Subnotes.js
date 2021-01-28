import React, { useState } from "react";
import styled from "styled-components";
import Subnote from "./Subnote";

export default function Subnotes({ subnotes, isEditing, setNote }) {
  const [noteText, setNoteText] = useState("");

  return (
    <Container subnotes={subnotes}>
      {isEditing && (
        <div>
          <input
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button onClick={() => setNote(noteText)}>a</button>
        </div>
      )}
      {subnotes &&
        subnotes.map((item, index) => {
          return <Subnote note={item} setNote={setNote} key={index} className="subnotes"/>;
        })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: -40px;
  padding-top: 10px;
  z-index: -1;

  .subnotes {
    background: red;
    display: ${({ subnotes }) => (subnotes.length > 0 ? "flex" : "none")};
  }
`;
