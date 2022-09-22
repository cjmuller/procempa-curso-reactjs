import React from "react";
import { Link } from 'react-router-dom';
import Card from '../../components/Card/index';
import { DivMain } from '../../components/Card/styles';

const Departamentos = () => {

    const departamentos = [
        { id_departamento: 1, nome: 'Recursos Humanos', sigla: 'RH' }, 
        { id_departamento: 2, nome: 'Financeiro', sigla: 'FINANC' }, 
        { id_departamento: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
    ];

    return (
        <>
            <h1>Departamentos</h1>        
            {departamentos.map((c) => {
                        return (<React.Fragment key={c.id_departamento} >
                                 
                                   <Card 
                                          click={`/departamentos/${c.id_departamento}`}
                                          label={c.nome}>
                                    </Card>
                                    <br></br>
                                 
                                </React.Fragment>
                                );
                    }
                )

            }
        </>
    );
}

export default Departamentos;
