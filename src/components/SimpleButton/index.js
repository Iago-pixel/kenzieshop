import { Container } from "./style";

export const SimpleButton = ({ icon: Icon, icon2: Icon2, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon size={20} />
      {Icon2 && <Icon2 size={20} />}
    </Container>
  );
};
