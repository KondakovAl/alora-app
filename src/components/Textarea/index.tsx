import React from 'react';

interface TextareaProps {
  name: string;
  required: boolean;
  register: any /* Check !*/;
  errors: any /* Check !*/;
  errorText: string;
  placeholder: string;
}

const Textarea = ({
  name,
  register,
  required,
  errors,
  errorText,
  placeholder,
}:TextareaProps) => {
  return (
    <div className='form__group'>
      <textarea
        {...register(name, {
          required: required,
        })}
        className={`form__textarea ${errors && errors[name] ? 'error' : ''}`}
        placeholder={placeholder}
      ></textarea>
      {errors && errors[name] && (
        <div className='form__label-error'>{errorText}</div>
      )}
    </div>
  );
};

export default Textarea;
