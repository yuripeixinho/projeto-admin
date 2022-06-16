import React from "react";
import { useField } from "formik";

export default function TextArea({ label, type, required, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        {label}
        {required && <span className="required-hash"> *</span>}
      </label>
      <textarea type={type} className="input-text" {...field} />

      <div className="input-error">
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </div>
    </>
  );
}
