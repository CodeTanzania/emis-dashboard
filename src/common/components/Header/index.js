import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  const containerStyle = {
    background: '#fafafa',
    height: '60px',
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '10px',
  };
  return (
    <div style={containerStyle}>
      <h3>{title}</h3>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
