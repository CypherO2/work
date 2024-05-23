import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { CopyBlock, dracula } from "react-code-blocks";
import { code1, code2, code3, code4 } from "../constants/code/code";

export default function CodeGallery() {
  return (
    <MDBContainer className="py-1">
      <MDBRow>
        <MDBCol lg={12} className="px-5 py-2 mb-4 mb-sm-0">
          <h3 className="">
            <span className="fw-bold">#1</span>) 🎲 Dice Rolling Command -
            Sgathach Bot
          </h3>
          <CopyBlock
            text={code1}
            theme={dracula}
            language="python"
            showLineNumbers={true}
            codeBlock
          />
        </MDBCol>
        <MDBCol lg={12} className="px-5 py-2 mb-4 mb-sm-0">
          <h3 className="">
            <span className="fw-bold">#2</span>) 🟩 POST Request Validation -
            WORDLE Clone
          </h3>
          <CopyBlock
            text={code2}
            theme={dracula}
            language="python"
            showLineNumbers={true}
            codeBlock
          />
        </MDBCol>
        <MDBCol lg={12} className="px-5 py-2 mb-4 mb-sm-0">
          <h3 className="">
            <span className="fw-bold">#3</span>) 🐸 Unoptimised Database
            Addition - Pokedex.py
          </h3>
          <CopyBlock
            text={code3}
            theme={dracula}
            language="python"
            showLineNumbers={true}
            codeBlock
          />
        </MDBCol>
        <MDBCol lg={12} className="px-5 py-2 mb-4 mb-sm-0">
          <h3 className="">
            <span className="fw-bold">#4</span>) 🖥️ ThemeProvider Dark Mode
            Toggle - Login System (React)
          </h3>
          <CopyBlock
            text={code4}
            theme={dracula}
            language="tsx"
            showLineNumbers={true}
            codeBlock
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
