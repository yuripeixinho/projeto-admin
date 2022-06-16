import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export default function ButtonsFooter({
  buttonSubmit,
  buttonCancel,
  routeNavigate,
  buttonDelete,
  handleDelete,
  props,
}) {
  let navigate = useNavigate();

  return (
    <div className="buttons-footer-container">
      {buttonSubmit && (
        <button type="submit" className="button-submit">
          Save
        </button>
      )}

      {buttonDelete && (
        <button
          type="button"
          className="button-delete"
          onClick={() => handleDelete(props)}
        >
          Delete
        </button>
      )}

      {buttonCancel && (
        <button
          type="button"
          className="button-cancel"
          onClick={() => navigate(`${routeNavigate}`)}
        >
          Back
        </button>
      )}
    </div>
  );
}
