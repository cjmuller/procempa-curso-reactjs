import React, { useState, useEffect } from "react";
import Card from '../../components/Card/index';
import { Container, List } from "./styles";
import Botao from "../../components/Botao";
import { getDepartamentos } from "../../services/departamentos";

const Departamentos = () => {

    //console.log(getDepartamentos());

    const [departamentos, setDepartamentos] = useState([]);

    const loadDepartamentos = async () => {
        setDepartamentos(await getDepartamentos());
    }

    useEffect(() => {
        if (departamentos.length === 0) {
            loadDepartamentos();
        }
    }, [departamentos]);
    

/*
    const departamentos = [
        { id_departamento: 1, nome: 'Recursos Humanos', sigla: 'RH' }, 
        { id_departamento: 2, nome: 'Financeiro', sigla: 'FINANC' }, 
        { id_departamento: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
    ];
*/
    return (
        <Container>
            <h1>Departamentos</h1>        
            <List>
                {departamentos.map((c) => {
                            return (<React.Fragment key={c.id_departamento} >
                                            <Card 
                                                click={`/departamentos/${c.id_departamento}`}
                                                label={c.nome}>

                                                <h3>{c.nome}</h3>

                                                <Botao
                                                uiType='success'
                                                label='Editar'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                />

                                                <Botao
                                                uiType='danger'
                                                label='Excluir'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                />                                                    

                                            </Card>
                                    </React.Fragment>
                                    );
                        }
                    )
                }
            </List>            
        </Container>
    );
}

export default Departamentos;
