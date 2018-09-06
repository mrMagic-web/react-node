import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component {

  render() {
    return (
      <div className="Contest">
        <div className="link category-name">{this.props.id}</div>
      </div>
    )
  }
} 

Contest.propTypes = {
  id: PropTypes.number.isRequired
}

export default Contest;