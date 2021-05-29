import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Button from './button';

describe('renders the button component', () => {
    it('display the value passed a prop', () => {
        const value = 'CE';

        const wrapper = mount(<Button button={value}/>);
        expect(wrapper.props().button).toEqual('CE');
    });
});