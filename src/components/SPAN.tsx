"use client";
import React, { useState } from "react";

const CopyableSpan = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <span
      onClick={handleCopy}
      style={{
        cursor: "pointer",
        color: isCopied ? "blue" : "black",
      }}
    >
      {text} {isCopied ? "✅" : "📋"}
    </span>
  );
};

export default CopyableSpan;
