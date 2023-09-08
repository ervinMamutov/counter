import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ styling, text, clickHandler }) => {
  return (
    <div>
      <button className={`btn ${styling}`} onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
};

// default props
Button.defaultProps = {
  styling: '',
  text: '',
  clickHandler: () => {},
};

// prop types
Button.propTypes = {
  styling: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
