import { memo } from "react";

const PrimaryButton = memo(({ content, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 border-2 border-blue-500 block mx-auto text-1xl active:text-blue-300 transition-colors font-black rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white bg-white hover:cursor-pointer"
    >
      {content}
    </button>
  );
});
export default PrimaryButton;
