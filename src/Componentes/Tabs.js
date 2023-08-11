import React, { useState } from "react";
import "./Tabs.css"
const Tabs = (props) =>{
    const {tabs,setTabs} = props;
    const [tabSeleccionada, setTabSeleccionada] = useState({
        etiqueta:tabs[0].etiqueta,
    });

    const onTabSelected = (e,etiqueta) =>{
        document.querySelectorAll('.btn').forEach(element => element.style.color="black")
        setTabSeleccionada({
            etiqueta: etiqueta
        });
        setTabs( (prev) => {
            prev.forEach(element => {
                element.selected=false;
                if(element.etiqueta ===etiqueta){
                    element.selected=true;
                }
            });
            return prev;
        })
        e.target.style.color="yellow";
    }

    return (
        <div>
            {
                tabs.map((tab,index)=>{
                    return( <button key={index} className={`btn ${tab.selected ? " active":""}`} onClick={(e) => onTabSelected(e,tab.etiqueta)}>{tab.etiqueta}</button>)  
                })
            }
            <div>
                {tabs.find(tab => tab.etiqueta===tabSeleccionada.etiqueta).contenido}
            </div>
        </div>

    )
}

export default Tabs;