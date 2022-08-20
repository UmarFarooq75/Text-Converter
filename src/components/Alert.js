import React from 'react'
import './alert.css'; 
function Alert(props) {

  return (
  
        props.alert &&
        <div className="alert alert-warning fade show form-control"   role="alert" id='alter1'>
            <strong >{props.alert.type}</strong> : {props.alert.msg}
        
        </div>
  )
}

export default Alert