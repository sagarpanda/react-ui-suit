import { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

class Style extends Component {

  render() {
    return this.props.children;
  }

}

Style.propTypes = {
  children: PropTypes.node
};

export default Style;
