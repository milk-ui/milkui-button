import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import { mount } from 'enzyme';

import Button from '../src';

/**
 * mount react component, and return a dom wrapper
 * @param {Object} props custom render props
 */
function mountComponent(props) {
  // prepare render props
  const renderProps = assign(
    {
      size: 'large',
      type: 'default',
    },
    props
  );
  // mount dom node wrapper
  const domWrapper = mount(
    <Button {...renderProps} />
  );

  return domWrapper;
}

describe('Button', () => {
  describe('render', () => {
    it('should render correctly', (done) => {
      const domWrapper = mountComponent({});
      expect(domWrapper.find('.milkui-button').length).to.be(1);
      done();
    });

    it('should have .milkui-button_primary class', (done) => {
      const domWrapper = mountComponent({ type: 'primary' });
      expect(domWrapper.find('.milkui-button_primary').length).to.be(1);
      done();
    });

    it('should have .milkui-button_danger class', (done) => {
      const domWrapper = mountComponent({ type: 'danger' });
      expect(domWrapper.find('.milkui-button_danger').length).to.be(1);
      done();
    });
  });
});
