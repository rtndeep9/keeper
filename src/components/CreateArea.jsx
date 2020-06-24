import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { useForm } from "react-hook-form";

function CreateArea(props) {


  const [isExpanded, setIsExpanded] = useState(false);

  const { register, handleSubmit, errors } = useForm();


  const submitNote = (data, event) => {
    props.onAdd(data);
    event.target.reset();
  }


  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitNote)} className="create-note" >
        {isExpanded && <input
          name="title"
          placeholder="Title"
          ref={register({ required: true, maxLength: {value:15, message:"Keep title short" }})}
        />}
        <p>{errors?.title?.message}</p>
        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          ref={register({ required: true })}
        />
        {(errors.content || errors.title) && <p> <span role="img" aria-label="Error">⚠️ </span> Do not leave fields empty </p>}
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
