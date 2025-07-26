import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

export default function ArgLoginPage() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MDBContainer>
        <LoginForm />
      </MDBContainer>
    </>
  );
}
