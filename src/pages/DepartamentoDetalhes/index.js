import React from "react";
import { useParams } from "react-router-dom";

const DepartamentoDetalhes = () => {

    const { idDepartamento } = useParams();
    console.log(useParams());

    return (
        <>
            <h1>Detalhes do DepartamentoDetalhes</h1>
            <p>Id do Departamento: {idDepartamento}</p>
        </>
    )
}

export default DepartamentoDetalhes;
