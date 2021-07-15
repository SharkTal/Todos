import React from "react";
import "./Todo.css";

import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';

function Todo({ todo }) {
  return (
    <div className="todo__list">
    

      <List>
        <ListItem disablePadding>
            <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todo} secondary="Deadline:" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
