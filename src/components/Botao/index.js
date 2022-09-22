import React from 'react';
//import StyledBotao from './styles';

const Botao = ({label = 'Clique aqui', onClick, uiType}) => {
    return (
            <button type="button" onClick={onClick}>{label}</button>
    )
}

export default Botao;