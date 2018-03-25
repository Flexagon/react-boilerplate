import Adapter from 'enzyme-adapter-react-16';
import enzyme, { shallow } from 'enzyme';
import chai from 'chai';
import Stream from './Stream';

const { expect } = chai;

enzyme.configure({ adapter: new Adapter() });

describe('Stream', () => {
  const props = {
    technologies: [{ title: 'x', id: 0 }, { title: 'y', id: 1 }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).to.have.length(2);
  });
});
