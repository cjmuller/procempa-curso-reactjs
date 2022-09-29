import React from 'react';
import BaseTexto from './styles';

const Texto = ({type, name, id, placeholder, value, onChange}) => {
    return (
            <BaseTexto type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange}>
            </BaseTexto>
    )
}

export default Texto;