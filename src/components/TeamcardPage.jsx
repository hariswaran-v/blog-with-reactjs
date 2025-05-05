import PropTypes from "prop-types";

const TeamcardPage = ({
  image = "https://i.pinimg.com/736x/84/64/82/8464826d795c3a32fff669b37aba806d.jpg",
  name = "Unknown",
  role = "Unknown",
}) => {
  return (
    <div className="bg-white p-10 rounded shadow text-center mb-5">
      <img
        src={image}
        alt="Hariswaran"
        className="w-40 h-40 rounded-full mb-2 mx-auto object-cover"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <small className="text-gray-700 text-sm">{role}</small>
      </div>
    </div>
  );
};

TeamcardPage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamcardPage;
