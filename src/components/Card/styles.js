import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import Card from './index';

export const StyledCardLink = styled(Link)`
    background: #E1E1E1;
    padding: 30px;
    display: flex;
    align-items: center;
`;

export const DivCard = styled.div`
background: #E1E1E1;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
    
`;

export const DivMain = styled.div`
    display: flex;
        
`;

export const DivBotao = styled.div`
  //box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  //transition: 0.3s;
  background: #E1E1E1;
  width: 20%;
  display: flex;
  padding: 20px;
  gap: 100%;
`;

export default StyledCardLink;