import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [busquedaRecetas, setBusquedaRecetas] = useState({
        ingrediente: '',
        categoria: '',
    });

    const [recetas, setRecetas] = useState([]);
    const [consultar, setConsultar] = useState(false);

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busquedaRecetas.ingrediente}&c=${busquedaRecetas.categoria}`;

                const resultado = await axios.get(url);

                setRecetas(resultado.data.drinks);
                
                setConsultar(false);
            };

            obtenerRecetas();
        }
    }, [busquedaRecetas,consultar]);

    return (
        <RecetasContext.Provider value={{ recetas,setBusquedaRecetas, setConsultar }}>{props.children}</RecetasContext.Provider>
    );
};

export default RecetasProvider;
