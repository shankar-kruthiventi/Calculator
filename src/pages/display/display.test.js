import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Display from './display';

describe('renders the display component', () => {
    it('display the value passed a prop', () => {
        const value = '1+2+3+4';

        const wrapper = mount(<Display displayValue={value}/>);
        expect(wrapper.props().displayValue).toEqual('1+2+3+4');
    });
});