import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function updateChange(event) {
    const { name, value } = event.target;
    setCreateNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(createNote);
    setCreateNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={updateChange}
          value={createNote.title}
          name="title"
          placeholder="Title"
        />}
        <textarea
          onClick={expand}
          onChange={updateChange}
          value={createNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
