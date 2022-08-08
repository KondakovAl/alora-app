import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import Textarea from '../Textarea';
import {Button} from '../Button/index';


type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form = () => {
  const [formIsSubmit, setFormIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });


  const onSubmit: SubmitHandler<FormValues> = data => {
    setTimeout(() => {
      console.log(data);
      setFormIsSubmit(true);
      
    }, 600);
  };


  if (formIsSubmit) {
    return (
      <div className='form-submited'>
        <h1 className='form-submited__title'>Thank you! &#129311;</h1>
        <p className='form-submited__text'>
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <Button
          className={'form-submited__button'}
          onClick={() => {
            setFormIsSubmit(false);
            reset();
          }}
          variant="form"
        >
          send-new-message
        </Button>
      </div>
    );
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='Name'
        required
        register={register}
        errors={errors}
        errorText='Enter your name'
        validationType='name'
      />
      <Input
        name='Email'
        required
        register={register}
        errors={errors}
        errorText='Enter the email address'
        validationType='email'
      />
      <Input
        name='Phone'
        required
        register={register}
        errors={errors}
        errorText='Enter your phone number'
        validationType='phone'
      />
      <Textarea
        name='Message'
        required
        register={register}
        errors={errors}
        errorText='Enter your message'
        placeholder='Please indicate the nature of your inquiry...'
      />
      <Button className='form__button' variant="form">submit-message</Button>
    </form>
  );
};

export { Form };
