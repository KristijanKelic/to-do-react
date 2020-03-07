import React from "react";
import { useHistory } from "react-router-dom";

import { Tasks } from "../../assets/icons";
import { ReactComponent as Finished } from "../../assets/tick.svg";

import "./bottom-nav.styles.scss";

const BottomNav = () => {
  const history = useHistory();
  return (
    <div className="bottom-nav-container">
      <span className="link" onClick={() => history.push("/")}>
        {history.location.pathname === "/" ? (
          <Tasks width="16" height="16" fill="#4caf50" />
        ) : (
          <Tasks width="16" height="16" fill="white" />
        )}
        <em
          style={{
            color: history.location.pathname === "/" ? "#4caf50" : "white"
          }}
        >
          Tasks
        </em>
      </span>
      <span className="link" onClick={() => history.push("/finished")}>
        {history.location.pathname === "/finished" ? (
          <Finished width="16" height="16" fill="#4caf50" />
        ) : (
          <Finished width="16" height="16" fill="white" />
        )}
        <em
          style={{
            color:
              history.location.pathname === "/finished" ? "#4caf50" : "white"
          }}
        >
          Finished
        </em>
      </span>
    </div>
  );
};

export default BottomNav;
