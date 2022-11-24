import React from 'react';
import { shallow } from 'enzyme';
import AddLanguage from '../../components/AddLanguage';

describe('AddLanguage', () => {
  let component;
  let handleAddLanguage;

  beforeEach(() => {
    handleAddLanguage = jest.fn();
    component = shallow(<AddLanguage handleAddLanguage={handleAddLanguage} />);
  });

  const findAddButton = () => {
    return component.find({ name: 'addButton' });
  };

  const findInput = () => {
    return component.find({ name: 'input' });
  };

  describe('on button click', () => {
    let button;

    beforeEach(() => {
      button = findAddButton();
      button.simulate('click');
    });

    it('calls handleAddLanguage', () => {
      expect(handleAddLanguage).toHaveBeenCalled();
    });

    it('sets input value to initial state', () => {
      expect(findInput().prop('value')).toEqual('');
    });
  });
});
