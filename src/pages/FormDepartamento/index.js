import React, { useState } from "react";
import StyledBotao from "../../components/Botao";
import Mensagem from "./styles";

const FormDepartamento = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('erro');

    // validacao do formulario
    const validaForm = () => {
        if (nome === '') {
            setMsg('Preencha o nome');
            setType('erro');
            return false;
        }

        if (sigla === '') {
            setMsg('Preencha a sigla');
            setType('erro');
            return false;
        }

        // sucesso
        setMsg('Sucesso');
        setType('sucesso');
        setNome('');
        setSigla('');

    }

    return (
        <>
            <h1>New Departamento</h1>
            <p/>Nome: <input type="text" name="nome" id="nome" placeholder="Nome" value={nome} 
                           onChange={(e) => {
                            setNome(e.target.value);
                           }}/>
            <p/>Sigla: <input type="text" name="sigla" id="sigla" placeholder="Sigla" value={sigla}
                            onChange={(e) => {
                            setSigla(e.target.value);
                            }}/>
            <p/><StyledBotao titulo="Enviar" onClick={validaForm} uiType="Success"></StyledBotao>
            <br/>
            <Mensagem type={type}>{msg}</Mensagem>
        </>
    )
}

export default FormDepartamento;
