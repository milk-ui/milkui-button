/**
 * Button of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Button from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo__panel">
        <div className="demo__title">Button</div>
        <div className="demo__description">
          This is a demo page, enjoy it! 😀 ✌️
        </div>
        <div className="demo__item">
          <div className="demo__button-group">
            <Button size="large" type="default">default</Button>
            <Button size="large" type="primary">primary</Button>
            <Button size="large" type="danger">danger</Button>
          </div>
          <div className="demo__button-group">
            <Button size="normal" type="default">default</Button>
            <Button size="normal" type="primary">primary</Button>
            <Button size="normal" type="danger">danger</Button>
          </div>
          <div className="demo__button-group">
            <Button size="small" type="default">default</Button>
            <Button size="small" type="primary">primary</Button>
            <Button size="small" type="danger">danger</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
