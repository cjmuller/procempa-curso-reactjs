import React, { useState } from "react";
import Botao from "../../components/Botao";
import { Mensagem } from "./styles";
import { insertDepartamentos } from "../../services/departamentos";
import Texto from "../../components/Texto";

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

        // monta obj
        let obj = {};
        obj.sigla = sigla;
        obj.nome = nome;

        (async () => {
            const resp = await insertDepartamentos(obj);

            if (resp.status && resp.status === 500) {
                setMsg('Erro no servidor!');
                setType('erro');
            } else {
                setMsg('Departamento cadastrado');
                setMsg('Sucesso');
                setType('sucesso');
                setNome('');
                setSigla('');
            }

        })()

        // sucesso
        // setMsg('Sucesso');
        // setType('sucesso');
        // setNome('');
        // setSigla('');

    }

    return (
        <>
            <h1>Adicionar Departamento</h1>
            <Texto type="text" name="nome" id="nome" placeholder="Nome..." value={nome} 
                           onChange={(e) => {
                            setNome(e.target.value);
                           }}/>
            <Texto type="text" name="sigla" id="sigla" placeholder="Sigla..." value={sigla}
                            onChange={(e) => {
                            setSigla(e.target.value);
                            }}/>
            <Botao label="Enviar" onClick={validaForm} uiType="Success"></Botao>
            <br/>
            <Mensagem type={type}>{msg}</Mensagem>
        </>
    )
}

export default FormDepartamento;
