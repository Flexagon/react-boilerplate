import React from 'react';
import PropTypes from 'prop-types';

const Stream = ({ technologies = [] }) => (
  <div>
    { technologies.map(technology => <div className="track" key={technology.id}>{technology.title}</div>) }
  </div>
);

Stream.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Stream;
