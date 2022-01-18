import { mount, shallow, ShallowWrapper } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas CounterApp', () => {

    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach( () =>{
        wrapper = shallow( <CounterApp />);
    });
    
    test('should show the component CounteApp Succesfully', () => {
        
        // const wrapper = shallow( <CounterApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the value by default', () => {
        const value: number = 10;
        const wrapper = shallow( <CounterApp value={value}/>);

        const valueByDefault: number = +wrapper.find('h2').text().trim();

        expect( valueByDefault ).toBe( value );
    });

    test('should increment in one when click on the button +1', () => {
        // const wrapper = shallow( <CounterApp />);
        const btnAdd = wrapper.find('.add');
        btnAdd.simulate('click');
        
        const newValue: number = +wrapper.find('h2').text().trim();

        expect( newValue ).toBe(1);
    });

    test('should substract -1 when click on the button', () => {
        const btnSubstract = wrapper.find('.substract');
        btnSubstract.simulate('click');
        
        const newValue: number = +wrapper.find('h2').text().trim();

        expect( newValue ).toBe(-1);
    });

    test('should reset the default value when click on the button', () => {
        // const value: number = 100;
        const wrapper = mount( <CounterApp value={100}/>);

        // Simular sumarle varias veces
        const btnAdd = wrapper.find('.add');
        btnAdd.simulate('click');
        btnAdd.simulate('click');
        btnAdd.simulate('click');

        // Resetear el valor
        const btnReset = wrapper.find('.reset');
        btnReset.simulate('click');

        // Obtener el valor del contador
        const newValue: number = +wrapper.find('h2').text().trim();
        // Obtener valor por defecto pasasdo por los props
        const valueProps: number = wrapper.props().value;

        expect( newValue ).toBe( valueProps );
    });
});