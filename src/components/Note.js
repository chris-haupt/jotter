import React, {useState} from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";
import Subnote from "./Subnote";

export default function Note({ bodyText, deleteItem }) {
    const [subnotes, setSubnotes] = useState([]);

    const addSubnote = (note) => {
        setSubnotes([...subnotes, note])
    }

  return (
    <NoteContainer className="box note">
      <div className="main-note">
        <p>{bodyText}</p>
        <button onClick={deleteItem} className="button">
          <FaTrash />
        </button>
        <button onClick={addSubnote} className="button">
          <AiOutlinePlusSquare />
        </button>
      </div>
      <Subnote style={{marginBottom:"-50px"}}/>
      <Subnote style={{marginBottom:"-30px"}}/>
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  .main-note {
    z-index: 100;
  }
`;
