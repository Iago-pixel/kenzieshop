import { Container } from "./style";

export const Input = ({ error, register, name, label, children, ...rest }) => {
  return (
    <Container>
      <label for={name}>{label}</label>
      <input id={label} {...register(name)} {...rest}>
        {children}
      </input>
      {!!error[name] && <p>{error[name]["message"]}</p>}
    </Container>
  );
};
