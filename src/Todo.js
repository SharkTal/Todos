import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Modal,
  Button,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { Box } from "@material-ui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "pink",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    //update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <div className="todo">
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={style}>
          <h3>Edit Todo</h3>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{fontSize: 20}}
          />
          <Button onClick={updateTodo} color="primary" disabled={!input}>
            Update Todo
          </Button>
        </Box>
      </Modal>
      <List className="todo__list">
        <ListItem disablePadding >
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <EditIcon onClick={(e) => setOpen(true)} style={{ color: "green" }} />
        <DeleteForeverIcon
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
          color="secondary"
        />
      </List>
    </div>
  );
}

export default Todo;
