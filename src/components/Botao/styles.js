import styled from 'styled-components';
import Botao from './index';

const StyledBotao = styled(Botao)`  
    color:  ${(props) => {
                            if (props.uiType === 'Success') { 
                                return 'white'; 
                            } else if (props.uiType === 'Danger') { 
                                return 'white';
                            } else {
                                return '';
                            }
                         } 
             };
    background:  ${(props) => {
                                if (props.uiType === 'Success') { 
                                    return '#198754'; 
                                } else if (props.uiType === 'Danger') { 
                                    return '#dc3545';
                                } else if (props.uiType === 'Warning') { 
                                    return '#ffc107';
                                } else {
                                    return '#e1e1e1';
                                }

                            }
             };

`;

export default StyledBotao;
