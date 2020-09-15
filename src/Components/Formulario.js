import React from 'react';

const Formulario = () => {
    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input type="text" name={"nombre"} placeholder={"Buscar por ingrediente"} className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="text" name={"categoria"} placeholder={"Buscar por Categoría"} className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="submit" name={"nombre"} placeholder={"Buscar por Categoría"} className="form-control"/>
                </div>
            </div>
        </form>
    );
};

export default Formulario;
