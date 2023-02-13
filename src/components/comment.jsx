import { useContext } from "react";
import { ActiveUser } from "../App";
import Person from "../context/person";
import CardControls from "./CardControls";
import CardSideControls from "./CardSideControls";
import MsgInput from "./MsgInput";
import PersonalInfo from "./PersonalInfo";

function Comment({ content, createdAt, score, user, id, replyTo }) {
  const { toggleReply } = useContext(ActiveUser);

  return (
    <>
      <>
        <div className="comment-card">
          <CardSideControls score={score} id={id} replyTo={replyTo} />
          <div className="card-content">
            <div className="comment-header">
              <PersonalInfo
                // src={src}
                alt={user.username}
                userName={user.username}
                createdAt={createdAt}
              />
              <CardControls
                username={user.username}
                id={id}
                replyTo={replyTo}
              />
            </div>
            <div className="card-body-text">
              <p> {content} </p>
            </div>
          </div>
        </div>

        {toggleReply.findIndex((obj) => obj.id === id && obj?.isToggled) !==
          -1 && (
          <>
            <MsgInput btnLabel="REPLY" replyTo={id} from={replyTo} />
          </>
        )}
      </>
    </>
  );
}

export default Comment;
