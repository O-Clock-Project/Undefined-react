/**
 * Import
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';

// Components
import App from 'src/components/App';
// Fonction de demo
const sum = (a, b) => a + b;

// préparation de should
should();

// Décrit une série de tests
describe('sum()', () => {
  // Un test
  it('should be a function', () => {
    expect(sum).to.be.a('function');
  });

  it('should return sum of parameters', () => {
    expect(sum(1, 2)).to.be.equal(3);
    expect(sum(-1, 1)).to.be.equal(0);
  });

  // Un test en attente
  it('should ...');
});


describe('App', () => {
  const comp = shallow(<App />);
  it('should not have prop className', () => {
    comp.props().should.not.have.property('className');
  });

  // un test suspendu avec skip
  it.skip('should have prop id', () => {
    comp.props().should.have.property('id');
  });
});
