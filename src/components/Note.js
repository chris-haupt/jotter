import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";
import Subnotes from "./Subnotes";

export default function Note({ bodyText, deleteItem }) {
  const [subnotes, setSubnotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddSubnote = (note) => {
    console.log({note})
    note ? setIsEditing(false) : setIsEditing(true);
    note && setSubnotes([...subnotes, note]);
  };

  return (
    <NoteContainer className="note">
      <div className="box main-note">
        <div className="button-container">
          <button onClick={deleteItem} className="button">
            <FaTrash />
          </button>
          <button onClick={()=>handleAddSubnote()} className="button">
            <AiOutlinePlusSquare />
          </button>
        </div>
        <p>{bodyText}</p>
      </div>
      <Subnotes
        subnotes={subnotes}
        isEditing={isEditing}
        setNote={handleAddSubnote}
      />
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  .main-note {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    z-index: 100;
  }
`;
