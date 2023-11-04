import React from "react";

const PaginatedButton = ({ content, onClick, active, disabled }: { content: any; onClick?: any; active?: boolean; disabled?: boolean }) => {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-8 h-8 p-[10px] text-[12px] font-semibold transition-colors rounded-lg border border-[#F1F1F1]
      ${active ? "bg-[#2F80ED] text-white" : "text-[#333333] bg-white"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default PaginatedButton;
