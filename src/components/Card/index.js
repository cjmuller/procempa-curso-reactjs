import React from 'react';
//import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import { StyledCardLink, DivCard, DivBotao } from './styles';

const Card = ({label = 'Clique aqui', click}) => {
    return (<>
                <DivCard>
                    <StyledCardLink to={click}>{label}</StyledCardLink>
                    <DivBotao>
                        <Botao label="Editar" uiType="Success"></Botao>
                        <Botao label="Excluir" uiType="Danger"></Botao>
                    </DivBotao>
                </DivCard>
            </>
    )
}

export default Card;