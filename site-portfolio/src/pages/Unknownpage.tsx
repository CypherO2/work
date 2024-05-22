import { useEffect } from "react";

export default function Unknownpage() {
  useEffect(() => {
    document.title = "Error 404 | Page Not Found";
  });
  return <></>;
}
