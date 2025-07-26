import { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { ARG_ONE_PATH } from "../constants/paths";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hardcoded password - change this to whatever you want
  const CORRECT_PASSWORD = "mrsctrlalternativedelilah_doubtfireesquire";

  const handleSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setError("");
      setIsLoggedIn(true);
      // In a real app, you would navigate to another page here
      // window.location.href = '/dashboard'; // Example redirect
    } else {
      setError("Incorrect password. Please try again.");
      setPassword(""); // Clear the input
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Success page after login
  if (isLoggedIn) {
    window.location.href = "#" + ARG_ONE_PATH;
    return null;
  }

  // Original login form with added functionality
  return (
    <>
      <MDBContainer className="p-5">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              style={{ height: "25rem", width: "30rem" }}
              className="bg-dark text-white my-auto mx-auto"
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter the password!</p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
                />

                {error && <p className="text-danger mb-3 small">{error}</p>}

                <MDBBtn
                  outline
                  className="mx-2 px-5 my-2"
                  color="warning"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Enter
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
