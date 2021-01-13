import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: '',
    });

    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

    // funcion para obtener los datos de los contenidos
    const obtenerDatosReceta = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className='col-12' onSubmit={e => {
                e.preventDefault();
                setBusquedaRecetas(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        type='text'
                        name={'ingrediente'}
                        placeholder={'Buscar por ingrediente'}
                        className='form-control'
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className='col-md-4'>
                    <select className='form-control' name='categoria' onChange={obtenerDatosReceta}>
                        <option value=''>-- Selecciona Categoría --</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input type='submit' value='Buscar Bebidas' className='btn btn-block btn-primary' />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
