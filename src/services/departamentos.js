import api from './api';

const headers = {
    'Authorization' : 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {
    const resp = await api.get('/departamentos/', { headers });
    return resp.data;
}

export const insertDepartamentos = async (obj) => {

    const formData = new FormData();
    formData.append('nome', obj.nome);
    formData.append('sigla', obj.sigla);

    let error = {};

    const resp = await api
                        .post('/departamentos/', formData, { headers })
                        .catch(e => {
                            error = e.response;
                        });
    //console.log(typeof resp.data);
    return (resp && resp.data) || error;
}


//export default getDepartamentos;