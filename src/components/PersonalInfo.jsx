import { useContext } from "react";
import { ActiveUser } from "../App";

import AmyrobsonWebp from "../instructions/images/avatars/image-amyrobson.webp";
import RamsesmironWebp from "../instructions/images/avatars/image-ramsesmiron.webp";

import MaxblagunWebp from "../instructions/images/avatars/image-maxblagun.webp";
import JusliusWebp from "../instructions/images/avatars/image-juliusomo.webp";

import * as constants from "../utils/constants";

const PersonInfo = ({ userName, createdAt }) => {
  const { currentUser } = useContext(ActiveUser);
  return (
    <>
      <div className="personal-info">
        <div className="img-wrapper">
          <img src={checkUserName(userName) || JusliusWebp} alt={userName} />
        </div>
        <div className="user-name">
          <span>{userName}</span>

          {currentUser.username === userName && <small> you</small>}
        </div>
        <span className="createdAt"> {createdAt} </span>
      </div>
    </>
  );
};

export default PersonInfo;

const checkUserName = (username) => {
  switch (username) {
    case constants.Amy:
      return AmyrobsonWebp;
    case constants.Max:
      return MaxblagunWebp;
    case constants.Ram:
      return RamsesmironWebp;
    default:
      return "";
  }
};
