import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import MemberPage from "./MemberPage";
import logo from "../../../../public/assets/images/logo.png";

function Auth() {
  return (
    <Section className="overflow-hidden">
      <Container className="overflow-hidden">
        <MemberPage brand={"MyRAJ"} logoUrl={logo.src} />
      </Container>
    </Section>
  );
}

export default Auth;
