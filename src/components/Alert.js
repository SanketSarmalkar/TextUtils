import React from "react";

export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // the below used code is in JSX format thus we can use he logical operations.
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <b>{capitalize(props.alert.type)}</b> : {props.alert.msg}
      
    </div>
  );
}

