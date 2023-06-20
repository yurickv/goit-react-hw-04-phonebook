import PropTypes from 'prop-types';
import css from './Filter-style.module.css'

export const Filter = ({ filter }) => {
    return (
        <div className={css.filterDiv}>
            <label htmlFor="search">Find contacts by name</label>
            <input name="search" onChange={filter} />
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.func.isRequired,
};