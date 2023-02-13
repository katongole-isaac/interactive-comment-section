import React, { useContext } from "react";
import { ActiveUser } from "../App";

function Main({ children }) {
  const { comments } = useContext(ActiveUser);
  return comments.map((comment) => (
    <React.Fragment key={comment.id}>{children(comment)}</React.Fragment>
  ));
}

export default Main;
