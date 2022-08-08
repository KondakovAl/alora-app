import React from "react";

const Textarea = ({ title, name, register, required, errors, errorText }) => {
  return (
    <div className="form__group">
      <label className="form__label">_{title}:</label>
      <textarea
        {...register(name, {
          required: required,
        })}
        className={`form__textarea ${errors && errors[name] ? "error" : ""}`}
      ></textarea>
      {errors && errors[name] && (
        <div className="form__label-error">{errorText}</div>
      )}
    </div>
  );
};

export default Textarea;
