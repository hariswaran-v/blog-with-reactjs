import PropTypes from "prop-types";
import socialLinksData from "./data/socialLinks.json"; // Adjust the path if needed

const SocialLinks = ({ links }) => (
  <div className="px-4 flex items-center space-x-12 rounded">
    {links.map((link) => (
      <a key={link.url} href={link.url}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className={`${link.hoverColor} cursor-pointer hover:scale-110 transition duration-300`}
        >
          <path fill="currentColor" d={link.iconPath}></path>
        </svg>
      </a>
    ))}
  </div>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      iconPath: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const App = () => {
  return <SocialLinks links={socialLinksData} />;
};

export default App;
