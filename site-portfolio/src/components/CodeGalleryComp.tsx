import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { CopyBlock, dracula } from "react-code-blocks";

export interface CodeGalleryProps {
  codeNum: string;
  codeTitle: string;
  codeText: string;
  codeLang: string;
}

export default function CodeGallery({
  codeNum,
  codeText,
  codeTitle,
  codeLang,
}: CodeGalleryProps) {
  return (
    <MDBContainer className="py-1">
      <MDBRow>
        <MDBCol lg={12} className="px-5 py-2 mb-4 mb-sm-0">
          <h3 className="text-light">
            <span className="fw-bold">#{codeNum})</span> {codeTitle}
          </h3>
          <CopyBlock
            text={codeText}
            theme={dracula}
            language={codeLang}
            showLineNumbers={true}
            codeBlock
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
