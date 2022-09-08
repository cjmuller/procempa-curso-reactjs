import { useState } from 'react';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

function App() {

  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  const [curso, setCurso] = useState(null);

  return (
    <>

      <Titulo nome_curso={curso}/>

      <input type="radio" id="reactjs" name="rd_curso" value="React JS" onClick={(e) =>{
        setCurso(e.target.value);
      }}></input><label>React JS</label><br/>
      <input type="radio" id="nodejs" name="rd_curso" value="Node JS" onClick={(e) =>{
        setCurso(e.target.value);
      }}></input><label>Node JS</label><br/>
      <input type="radio" id="jscsspro" name="rd_curso" value="JS e CSS Pro" onClick={(e) =>{
        setCurso(e.target.value);
      }}></input><label>JS e CSS Pro</label><br/>

      <p>Contador: {count}</p>

      {/* Componente Botao */}
      <Botao onClick={() =>{
        setCount(count+1);
      }}/>

      <p>Contador 2: {count2}</p>

      <Botao label = "< Contador" onClick={() =>{
        setCount2(count2-1);
      }}/>
      <Botao label = "Contador >" onClick={() =>{
        setCount2(count2+1);
      }}/>

    </>
  );

}

export default App;
