import React from 'react';

const Botao = ({label = 'Clique aqui', onClick}) => {
    return (
            <button type="button" onClick={onClick}>{label}</button>
    )
}

export default Botao;