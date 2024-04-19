import {useState}from "react"

const ChangeName = (props) => {
    let {name,onUpdate}=props;
    
  return (
    <div className="conatiner mt-3">
      <div>{name}</div>
      <button className="btn btn-warning" onClick={onUpdate}>Change Name
     
      </button>
    </div>
  )
};

export default ChangeName
