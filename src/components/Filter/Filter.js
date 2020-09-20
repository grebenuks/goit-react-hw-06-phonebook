import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';
import { getFilterValue, setFilteredArr } from '../../redux/actions';
import { connect } from 'react-redux';

function Filter({ filter, getFilterValue, setFilteredArr }) {
  const getName = ({ target: { value } }) => {
    getFilterValue(value);
    setFilteredArr(value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={getName}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  getFilterName: PropTypes.func,
};

const mapStateToProps = state => ({ filter: state.contacts.filter });

const mapDispatchToProps = { getFilterValue, setFilteredArr };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
