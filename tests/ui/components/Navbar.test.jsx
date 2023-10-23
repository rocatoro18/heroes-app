import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, useNavigate } from 'react-router-dom';

// MOCK DE UN CUSTOM HOOK DE LA LIBRERIA REACT-ROUTER-DOM
// (PUEDE SER DE LA LIBRERIA COMPLETA)
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

describe('Pruebas en <Navbar/>',()=>{

    const contextValue = {
        logged: true,
        user: {
            name: 'Katy'
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario loggeado',()=>{
        
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        //screen.debug();
        expect(screen.getByText('Katy')).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton logout',()=>{
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});

    });

});