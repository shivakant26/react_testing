import React, { useState } from "react";
import { useForm } from "react-hook-form";
import mathOperations from "../mathOption";
import { InputField,RegiterButton } from "./styled";
export const data = ["ds", "sdf", "dsfew", "fsdfs"];

const Register = () => {
  const [counter, setCouter] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const increment = () => {
    setCouter(counter + 1);
  };

  return (
    <>
      <div className="regiter_form">
        <h2>Register Component</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <InputField
              placeholder="firstName"
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.firstName?.type === "required" && (
              <p className="error">required</p>
            )}
          </div>
          <div className="form-field">
            <InputField
              placeholder="lastName"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.lastName?.type === "required" && (
              <p className="error">required</p>
            )}
          </div>
          <div className="form-field">
            <InputField
              placeholder="adharCard"
              {...register("adharCard", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.adharCard?.type === "required" && (
              <p className="error">required</p>
            )}
          </div>
          <div className="form-field">
            <InputField
              placeholder="city"
              {...register("city", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.city?.type === "required" && (
              <p className="error">required</p>
            )}
          </div>
          <div className="form-field">
            <RegiterButton primary data-testid="save" type="submit">
              Save
            </RegiterButton>
          </div>
        </form> 
      </div>
      <div className="showData">
        <p data-testid="counter">{counter}</p>
        <button data-testid="increment" onClick={increment}>
          counter
        </button>
      </div>
      <div className="sum">
        <span data-testid="sum">{mathOperations.sum(2, 4)}</span>
      </div>
    </>
  );
};

export default Register;
