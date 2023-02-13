import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { ActiveUser } from "../App";
import * as actions from "../utils/actions";
import * as yup from "yup";

import Image from "../instructions/images/avatars/image-juliusomo.png";
function MsgInput({ src, alt, btnLabel, className, replyTo, from }) {
  const { currentUser } = useContext(ActiveUser);

  return (
    <>
      <div className={`input-card ${className}`}>
        <div className="aside">
          <div className="img-wrapper">
            <img src={src || Image} alt={alt || currentUser.username} />
          </div>
        </div>
        <MyInput btnLabel={btnLabel} replyTo={replyTo} from={from} />
      </div>
    </>
  );
}

export default MsgInput;

const MyInput = ({ btnLabel, replyTo, from }) => {
  //  replyTo - is the comment id which the users clicks
  // from - is the comment from which the replies began.

  const { lastId, setLastId, dispatch, currentUser, handleToggleReply } =
    useContext(ActiveUser);

  return (
    <>
      <div className="input-section">
        <Formik
          initialValues={{
            msg: "",
          }}
          validationSchema={yup.object({
            msg: yup.string().required(),
          })}
          onSubmit={(values) =>
            dispatch({
              type: actions.REPLY_COMMENT,
              payload: {
                lastId,
                setLastId,
                replyTo,
                values,
                from,
                currentUser,
                handleToggleReply,
              },
            })
          }
        >
          {(formik) => (
            <>
              <Form>
                {/* <ErrorMessage name="msg" /> */}
                <Field
                  name="msg"
                  as="textarea"
                  className={formik.errors.msg ? "input-error" : null}
                />
                <div className="ctrls">
                  <button type="submit" className="input-btn">
                    {btnLabel}
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
