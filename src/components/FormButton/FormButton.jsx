import PropTypes from "prop-types";

const FormButton = ({ text }) => {
  return (
    <button className="bg-orange-500 p-2 text-white font-semibold rounded">
      {text}
    </button>
  );
};

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormButton;
