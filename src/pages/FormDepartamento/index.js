import React, { useState, useEffect } from "react";
import Botao from "../../components/Botao";
import { Mensagem } from "./styles";
import { insertDepartamentos } from "../../services/departamentos";
import Texto from "../../components/Texto";

const FormDepartamento = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('erro');

    let obj = {};

    const [insertDepartamento, setinsertDepartamento] = useState();

    const asyncInsertDepartamentos = async (obj) => {
        setMsg('Aguarde...');
        setType('aviso');

        setinsertDepartamento(await insertDepartamentos(obj));
    }

    useEffect(() => {
        console.log(insertDepartamento);
        if (insertDepartamento !== undefined) {
            if (typeof insertDepartamento === 'object') {
                // sucesso
                setMsg('Sucesso');
                setType('sucesso');
                setNome('');
                setSigla('');
            } else {
                setMsg('Erro:' + insertDepartamento);
                setType('erro');
                setNome('');
                setSigla('');
            }    
        }
    }, [insertDepartamento]);

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
        obj.sigla = sigla;
        obj.nome = nome;

        asyncInsertDepartamentos(obj);
        //insertDepartamentos(obj);

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
