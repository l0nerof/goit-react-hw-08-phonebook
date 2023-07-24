import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ filter, handleChange }) {
  return (
    <div className={css.formContainer}>
      <label>
        Filter contacts by name:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
