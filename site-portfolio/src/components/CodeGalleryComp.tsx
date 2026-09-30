"use client";

import { CopyBlock, dracula } from "react-code-blocks";

export type CodeGalleryProps = {
  codeNum: string;
  codeTitle: string;
  codeText: string;
  codeLang: string;
};

export default function CodeGallery({
  codeNum,
  codeText,
  codeTitle,
  codeLang,
}: CodeGalleryProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 text-[1.1rem] font-bold">
        <span>#{codeNum})</span> {codeTitle}
      </h3>
      <CopyBlock
        text={codeText}
        theme={dracula}
        language={codeLang}
        showLineNumbers
        codeBlock
      />
    </div>
  );
}
