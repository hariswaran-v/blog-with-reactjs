import { useState } from "react";
const accordionActiveState = ({ title, desc }) => {
  const [accordionActiveState, setAccordionActiveState] = useState(false);

  const toggleAccordion = () => {
    setAccordionActiveState(!accordionActiveState);
  };
  return (
    <div>
      <div
        className=" bg-gray-200 p-5 rounded-t flex items-center justify-between cursor-pointer hover:bg-gray-300"
        onClick={toggleAccordion}
      >
        <h4 className="font-semibold">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className={accordionActiveState ? "rotate-90" : ""}
        >
          <path
            fill="currentColor"
            d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
          ></path>
        </svg>
      </div>
      <div
        className={
          "bg-gray-100 p-5 " + (accordionActiveState ? "block" : "hidden")
        }
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default accordionActiveState;
