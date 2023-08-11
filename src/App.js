import './App.css';
import React, { useState } from 'react';
import Tabs from './Componentes/Tabs';


function App() {
  const [tabs,setTabs] = useState([{
    etiqueta:"Tab 1",
    contenido:"Contenido de Tab 1",
    selected:true
  },{
    etiqueta:"Tab 2",
    contenido:"Contenido de Tab 2",
    selected:false
  }]);

  
  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
    </div>
  );
}

export default App;
