/**
 * Button of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './index.scss';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    type: 'default',
    size: 'normal',
  }

  render() {
    const { className, children, type, size } = this.props;
    const wrapCls = classnames(
      'milkui-button',
      {
        'milkui-button_default': type === 'default',
        'milkui-button_primary': type === 'primary',
        'milkui-button_danger': type === 'danger',
        'milkui-button_small': size === 'small',
        'milkui-button_normal': size === 'normal',
        'milkui-button_large': size === 'large',
      },
      className
    );

    return (
      <button className={wrapCls}>
        {children}
      </button>
    );
  }
}

export default Button;
