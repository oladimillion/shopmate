import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * MessageAlert
 *
 * @name MessageAlert
 * @function
 * @prop {string} message
 * @prop {boolean} hasError
 * @returns {jsx}
 */
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

MessageAlert.propTypes = {
  message: PropTypes.string,
  hasError: PropTypes.bool,
};

export default MessageAlert;

