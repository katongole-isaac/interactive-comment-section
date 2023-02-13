import PlusIcon from "../instructions/images/icon-plus.svg";
import MinusIcon from "../instructions/images/icon-minus.svg";
import { useContext } from "react";
import { ActiveUser } from "../App";
import * as actions from "../utils/actions";

function CardSideControls({ score = 0, id, replyTo }) {
  const { dispatch } = useContext(ActiveUser);
  return (
    <>
      <div className="card-side-controls">
        <img
          src={PlusIcon}
          alt="plus_icon"
          className="side-btn"
          role="button"
          onClick={() =>
            dispatch({ type: actions.UPVOTE, payload: { id, replyTo } })
          }
        />
        <span> {score} </span>
        <img
          src={MinusIcon}
          alt="minus_icon"
          className="side-btn"
          role="button"
          onClick={() =>
            dispatch({ type: actions.DOWNVOTE, payload: { id, replyTo } })
          }
        />
      </div>
    </>
  );
}

export default CardSideControls;
