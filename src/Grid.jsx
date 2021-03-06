import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Grid.css';
/**
* General component description.
*/
class Grid extends Component {

  render() {
    const { className, autoFitEnable, autoFit, height, ...extra } = this.props;
    const styleClass = [styles.grid, className];
    const style = extra.style || {}
    let extraProps = {...extra};
    if (autoFitEnable) {
      styleClass.push('vflex');
      if (height) {
        extraProps = {...extra, style:{...style, height}}
      } else {
        styleClass.push('flex-1');
      }
    } else if(autoFit) {
      styleClass.push('flex-1');
    }
    return (
      <div className={classnames(styleClass)} {...extraProps}>{this.props.children}</div>
    );
  }

}

Grid.propTypes = {
  /**
  * Description of prop "foo".
  */
  children: PropTypes.node,
  /**
  * Description of prop "className".
  */
  className: PropTypes.string,
  autoFitEnable: PropTypes.bool,
  autoFit: PropTypes.bool,
  height: PropTypes.number
};

export default Grid;
