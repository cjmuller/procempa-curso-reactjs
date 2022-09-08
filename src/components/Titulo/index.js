import React from 'react';

const Titulo = ({nome_curso}) => {
    return (
        <>
            {nome_curso && <h1>Curso selecionado: {nome_curso}</h1>}
            {!nome_curso && <h1>Nenhum curso selecionado...</h1>}
        </>
    )
}

export default Titulo;