import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

// MOCK PARCIAL DE LIBRERIA REACT ROUTER DOM
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    // ESPARCIMOS TODO LO QUE EXISTE EN LA LIBRERIA,
    // PERO SOLO VAMOS A SOBREESCRIBIR LO QUE NECESITAMOS
    // COMO EL USENAVIGATE
    ...jest.requireActual('react-router-dom'),
    // SOBREESCRIBIR EL USE NAVIGATE PARA HACERLE EL MOCK
    // Y UTILIZARLO DENTRO DE LOS TEST
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>',()=>{

    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto',()=>{
        // TOMAR SCREENSHOT
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );
        //screen.debug();
        // COMPARAR CON SNAPSHOT
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrars a batman y el input con el valor del queryString',()=>{
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );
        //screen.debug();
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');

        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');

        expect(alert.style.display).toBe('none');
        //console.log(alert.style.display);
    });

    test('debe de mostrar un error si no se encuentra el hero (batman123)',()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );
        //screen.debug();
        const alert = screen.getByLabelText('alert-danger2');

        expect(alert.style.display).toBe('');
    });

    test('debe de llamar el navigate a la pantalla nueva',()=>{
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input,{target:{name:'searchText',value:inputValue}});
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    });

});