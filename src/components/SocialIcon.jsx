// SocialIcon.jsx
const SocialIcon = ({ url, svgPath, title }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={svgPath}></path>
      </svg>
    </a>
  );
};

export default SocialIcon;
