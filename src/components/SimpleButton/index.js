import { Container } from "./style";

export const SimpleButton = ({ icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon size={20} />
    </Container>
  );
};
