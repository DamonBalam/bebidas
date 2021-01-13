import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentra las funciones y el state
const CategoriasProvider = (props) => {
    // crear el state de categorias
    const [categorias, setCategorias] = useState([]);

    // ejecutar la consulta a la api
    useEffect(() => {
        // obtener categorias
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            setCategorias(categorias.data.drinks);
        };

        obtenerCategorias();
    }, []);

    return <CategoriasContext.Provider value={{categorias}}>{props.children}</CategoriasContext.Provider>;
};

export default CategoriasProvider;
