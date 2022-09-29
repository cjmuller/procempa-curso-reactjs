import React from 'react';
import BaseBotao from './styles';

const Botao = ({label = 'Clique aqui', onClick, uiType}) => {
    return (
            <BaseBotao type="button" onClick={onClick} uiType={uiType}>
                {label}
            </BaseBotao>
    )
}

export default Botao;