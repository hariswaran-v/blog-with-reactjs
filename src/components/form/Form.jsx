import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <div className="w-full">
      <label htmlFor={props.name} className="block mb-2">
        {props.label}
      </label>
      <input
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        className="bg-gray-200 px-4 py-2 rounded w-full outline-none text-black"
      />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
