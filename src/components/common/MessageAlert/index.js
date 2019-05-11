import React from "react";

import "./index.css";

const MessageAlert = ({ message, hasError }) => {
  return (
    <React.Fragment>
      {
        message && (
          <div className={`message__alert text__center ${hasError ? "failure" : "success"}`}>
            {message}
          </div>
        )
      }
    </React.Fragment>
  )
}

export default MessageAlert;

