import React from 'react';
import PropTypes from 'prop-types';

export default function TitleBar(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
}
