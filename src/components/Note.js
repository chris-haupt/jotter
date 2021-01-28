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
    note ? setSubnotes([...subnotes, note]) : setSubnotes([...subnotes, " "]);
  };

  return (
    <NoteContainer className="note">
      <div className="box main-note">
        <p>{bodyText}</p>
        <button onClick={deleteItem} className="button">
          <FaTrash />
        </button>
        <button onClick={handleAddSubnote} className="button">
          <AiOutlinePlusSquare />
        </button>
      </div>
      <Subnotes
        subnotes={subnotes}
        isEditing={isEditing}
        setNote={()=>handleAddSubnote()}
      />
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  .main-note {
    z-index: 100;
  }
`;
