import React from "react";

import "./styles.scss";

export default function AlertMessages({
  label,
  simple,
  sucess,
  danger,
  warning,
}) {
  return (
    <>
      {simple && (
        <div className="alert simple-alert">
          <span>{label}</span>
        </div>
      )}

      {sucess && (
        <div className="alert success-alert">
          <span>{label}</span>
        </div>
      )}

      {danger && (
        <div className="alert danger-alert">
          <span>{label}</span>
        </div>
      )}

      {warning && (
        <div className="alert warning-alert">
          <span>{label}</span>
        </div>
      )}
    </>
  );
}
