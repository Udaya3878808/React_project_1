import React, { useState } from "react";
import { data } from "./Data";

const Accordion = () => {
  const [selected, setselected] = useState(null);
  const [enable,setEnable] = useState(false)
  const [mutiple,setMutiple] = useState([])
  function handleSelection(getdata) {
    setselected(getdata === selected ? null : getdata);
  }
  function handleMutiSelecction(getdata){
    let cpyMutiple = [...mutiple]
    const findIndexOfcurrentid =cpyMutiple.indexOf(getdata)
    console.log(findIndexOfcurrentid);
    if(findIndexOfcurrentid === -1)
        cpyMutiple.push(getdata)
    else
     cpyMutiple.splice(findIndexOfcurrentid,1)
      setMutiple(cpyMutiple);
  }

console.log(selected,mutiple)
  return (
    <div className="wrapper">
        <button onClick={() => setEnable(!enable)}>
            {enable?"Enable":"disable"} 
        </button>
      <div className="Accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={enable
                   ? ()=> handleMutiSelecction(dataItem.id)
                   : () => handleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.Question} </h3>
                <span>+</span>
              </div>
              {enable
              ? mutiple.indexOf(dataItem.id) !== -1 &&(
                <div>{dataItem.Answer}</div>
              )
            : selected === dataItem.id && (
                <div>{dataItem.Answer}</div>
            )
            }
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
