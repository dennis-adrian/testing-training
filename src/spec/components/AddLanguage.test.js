import React from 'react';
import { shallow } from 'enzyme';
import AddLanguage from '../../components/AddLanguage';

describe('AddLanguage', () => {
  let component, handleAddLanguage;

  beforeEach(() => {
    handleAddLanguage = jest.fn();
    component = shallow(<AddLanguage handleAddLanguage={handleAddLanguage} />);
  });

  const findInput = () => {
    return component.find({ name: 'input' });
  };

  const findAddButton = () => {
    return component.find({ name: 'addButton' });
  };

  describe('on button click', () => {
    beforeEach(() => {
      const button = findAddButton()
      button.simulate('click');
    });

    it('calls handleAddLanguage', () => {
      expect(handleAddLanguage).toHaveBeenCalled();
    });

    it('sets the input to initial state', () => {
      expect(findInput().prop('value')).toBe('');
    });
  });
});
