import React, { Profiler, useCallback, useEffect, useState } from "react";
// import "./app.css";
import "./sass/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./components/comment";
import MsgInput from "./components/MsgInput";

import fetchedData from "./instructions/data.json";
import Main from "./components/Main";
import { useImmer, useImmerReducer } from "use-immer";
import * as actions from "./utils/actions";
import Modal from "./components/Modal";

export const ActiveUser = React.createContext(null);

export function App() {
  const [data, dispatch] = useImmerReducer(reducer, fetchedData);
  const [toggleReply, setToggleReply] = useImmer([]);
  const [lastId, setLastId] = useState(null);

  useEffect(() => {
    setLastId(getLastId(data.comments));
  }, []);

  // getting the last id
  const getLastId = useCallback((comments) => {
    if (!Array.isArray(comments)) return null;

    let max = comments[0].id,
      replyWithMaxId;

    return comments.reduce((prev, curr) => {
      if (curr.id >= max) max = curr.id;

      if (curr.replies.length === 0) return max;

      // using the current comment, check in the replies and see whether there is a reply with highest id than the comments.
      replyWithMaxId = Math.max.apply(
        null,
        curr.replies.map((reply) => reply.id)
      );

      if (replyWithMaxId >= max) max = replyWithMaxId;
      return max;
    }, max);
  });

  const handleToggleReply = useCallback(
    (id) => {
      setToggleReply((draft) => {
        if (draft.length === 0) {
          draft.push({ id, isToggled: true });
          return;
        }

        if (draft.findIndex((obj) => obj.id === id) !== -1) {
          let item = draft.find((obj) => obj.id === id);
          item.isToggled = !item.isToggled;
          return;
        }

        draft.push({ id, isToggled: true });
      });
    },
    [toggleReply]
  );

  return (
    <>
      <Modal
        title={"Delete comment"}
        content="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, labore! Animi dignissimos error vero saepe magni odit magnam ab quod.
      "
      />

      <ActiveUser.Provider
        value={{
          ...data,
          toggleReply,
          handleToggleReply,
          dispatch,
          lastId,
          setLastId,
        }}
      >
        <div className="container-fluid vh-100 ">
          <div className="container  vh-100 p-4">
            <div>
              <Main>
                {(comment) => (
                  <>
                    <Comment {...comment} replyTo={comment.id} />

                    {comment.replies.length !== 0 && (
                      <>
                        <div className="replies">
                          {comment.replies.map((reply) => (
                            <Comment
                              key={reply.id}
                              {...reply}
                              replyTo={comment.id}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </Main>
            </div>
            <div className="emptyDiv"></div>
            <MsgInput btnLabel="SEND" className="bottom" />
          </div>
        </div>
      </ActiveUser.Provider>
    </>
  );
}

function reducer(draft, action) {
  switch (action.type) {
    case actions.UPVOTE:
      upVote(draft, action.payload);
      break;
    case actions.DOWNVOTE:
      downvote(draft, action.payload);
      break;
    case actions.REPLY_COMMENT:
      replyComment(draft, action.payload);
      break;
    case actions.DELETE_COMMENT:
      deleteComment(draft, action.payload);
    default:
      return draft;
  }
}

function upVote({ comments }, { id, replyTo }) {
  //if its a reply
  if (!replyTo) {
    ++comments.find((comment) => comment.id === id).score;
    return;
  }

  ++comments
    .find((comment) => comment.id === replyTo)
    .replies.find((reply) => reply.id === id).score;
}

function downvote({ comments }, { id, replyTo }) {
  // if its not a reply , look thru' in the comments.
  if (!replyTo) {
    --comments.find((comment) => comment.id === id).score;
    return;
  }

  //   here , replyTo is set so, use the `id` to search for the reply and update it.
  --comments
    .find((comment) => comment.id === replyTo)
    .replies.find((reply) => reply.id === id).score;
}

function deleteComment(draft, action) {
  // replyTo is the comment id
  // id is the reply id which the user has just clicked to delete.

  const { id, replyTo } = action;
  console.log(action);
  let commentIndx;

  // check in the comments, first
  commentIndx = draft.comments.findIndex((comment) => comment.id == id);
  if (commentIndx !== -1) {
    draft.comments.splice(commentIndx, 1);
    return;
  }

  // if u cannot find it in the comments, try checking in the respectives replies section.

  commentIndx = draft.comments
    .find((comment) => comment.id === replyTo)
    .replies.findIndex((reply) => reply.id === id);

  // go to the respective comment but in the replies section and delete a reply with id === id
  draft.comments
    .find((comment) => comment.id === replyTo)
    .replies.splice(commentIndx, 1);
}

// replying comment

function replyComment(draft, action) {
  //  replyTo - is the comment id which the users clicks
  // from - is the comment from which the replies began.

  const {
    lastId,
    setLastId,
    from,
    replyTo,
    values,
    currentUser,
    handleToggleReply,
  } = action;

  setLastId((prev) => ++prev);
  let id = lastId,
    comment,
    reply = {
      content: values.msg,
      createdAt: "now",
      id: ++id,
      score: 0,
      user: { ...currentUser },
    };

  if (replyTo === from) {
    // if you're replying a comment
    comment = draft.comments.find((comment) => comment.id === replyTo);
    reply.replyingTo = comment.user.username;

    comment.replies.push(reply);
  } else {
    // if u're replying a reply
    comment = draft.comments
      .find((comment) => comment.id === from)
      .replies.find((reply) => reply.id === replyTo);

    reply.replyingTo = comment.user.username;
    draft.comments.find((comment) => comment.id === from).replies.push(reply);
  }

  setTimeout(() => {
    // after replying, close the reply input field
    handleToggleReply(replyTo);
  }, 500);
}
