import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

function TextArea() {
  const { pending } = useFormStatus();
  const isSubmittedRef = useRef(0);

  useEffect(() => {
    if (
      isSubmittedRef.current === 0 ||
      (isSubmittedRef.current === 2 && pending === true)
    ) {
      isSubmittedRef.current = 1;
    }
    if (isSubmittedRef.current === 1 && pending === false) {
      isSubmittedRef.current = isSubmittedRef.current + 1;
    }
  }, [pending]);

  return (
    <textarea
      className="grow textarea resize-none  border-none outline-none focus:outline-none"
      style={{
        scrollbarWidth: "none",
        height: `${isSubmittedRef.current === 2 ? "auto" : undefined}`,
      }}
      name="message"
      rows={1}
      onChange={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
      readOnly={pending}
    />
  );
}

export default TextArea;
