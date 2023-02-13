import DeleteIcon from "../instructions/images/icon-delete.svg";
import ReplyIcon from "../instructions/images/icon-reply.svg";
import EditIcon from "../instructions/images/icon-edit.svg";
import { useContext } from "react";
import { ActiveUser } from "../App";
import * as actions from "../utils/actions";

const CardControls = ({ username, id , replyTo }) => {
  // replyTo is the comment id 
  // id is the reply id which the user has just clicked to delete.
  const { currentUser, handleToggleReply, dispatch } = useContext(ActiveUser);
  return (
    <>
      <div className="card-ctrls">
        {currentUser.username === username && (
          <Button
            label="Delete"
            icon={DeleteIcon}
            alt="delete_icon"
            className="delete"
            handleClick={() =>
              dispatch({ type: actions.DELETE_COMMENT, payload: { id, replyTo } })
            }
          />
        )}
        {currentUser.username !== username && (
          <Button
            label="Reply"
            icon={ReplyIcon}
            alt="reply_icon"
            className="reply"
            handleClick={() => handleToggleReply(id)}
          />
        )}
        {currentUser.username === username && (
          <Button
            label="Edit"
            icon={EditIcon}
            alt="edit_icon"
            className="edit"
          />
        )}
      </div>
    </>
  );
};

export default CardControls;

const Button = ({ icon, label, alt, className, handleClick }) => (
  <>
    <div role="button" className={className} onClick={handleClick}>
      <div className="ctrl-icon">
        <img src={icon} alt={alt} />
      </div>
      <span>{label}</span>
    </div>
  </>
);
