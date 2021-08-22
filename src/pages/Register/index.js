// import Form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// imports componentes
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./style";

// react router dom
import { Link, useHistory } from "react-router-dom";

//service
import api from "../../services/api";

//react
import { useState } from "react";

export const Register = () => {
  const history = useHistory();

  const [submitError, setSubmitError] = useState("");

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required name")
      .max(13, "Maximum 13 characters"),
    email: yup
      .string()
      .required("Required Email")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "E-mail inválido"
      ),
    password: yup
      .string()
      .required("Required password")
      .min(6, "Minimum 6 characters"),
    rePass: yup
      .string()
      .required("Required confirmation")
      .oneOf([yup.ref("password")], "Different password"),
    gender: yup.string().required("Required gender"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendRegister = ({ name: username, email, password }) => {
    api
      .post("/users/", { username, email, password })
      .then((_) => history.push("/d"))
      .catch((_) => setSubmitError("Sorry, an error occurred.."));
  };

  return (
    <Container>
      <h1>Create new account</h1>
      <p>Use the form below to register at the store</p>
      <p>It's quick and easy</p>
      <form onSubmit={handleSubmit(sendRegister)}>
        <Input
          error={errors}
          name="name"
          label="Full Name:"
          register={register}
        />
        <Input error={errors} name="email" label="Email:" register={register} />
        <Input
          error={errors}
          name="password"
          label="Type the password"
          register={register}
        />
        <Input
          error={errors}
          name="rePass"
          label="Confirm the Password:"
          register={register}
        />
        <div>
          <p>Gender:</p>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label for="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label for="female">Female</label>
          </div>
          {!!errors.gender && <p>{errors.gender.massage}</p>}
        </div>
        <Button type="submit">Register</Button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
      <p>{submitError}</p>
    </Container>
  );
};
