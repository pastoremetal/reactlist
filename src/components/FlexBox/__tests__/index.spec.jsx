import React from 'react';
import { render } from 'enzyme';
import { Flex, Box } from '../index';

describe('Flex', () => {
  it('should be a div for default', () => {
    const wrapper = render(<Flex />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be a given component', () => {
    const child = () => <header />;
    const wrapper = render(<Flex tag={child} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a given child component', () => {
    const wrapper = render(<Flex><header>foo</header></Flex>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Box', () => {
  it('should be a div for default', () => {
    const wrapper = render(<Box />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be a given component', () => {
    const child = () => <header />;
    const wrapper = render(<Box tag={child} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a given child component', () => {
    const wrapper = render(<Box><header>foo</header></Box>);
    expect(wrapper).toMatchSnapshot();
  });
});
