import React from "react";
// import "./style.css";

function Form(props) {
  return (
    <form >
      <div className="form-inline" >
        <input className="form-control mr-sm-2"

          type="text"
          name="search"
          placeholder={props.placeholder}
          value={props.search}
          onChange={props.handleInputChange} />
        <button className="btn btn-success "
          
          type="submit"
          onClick={props.handleFormSubmit}>
         {props.children}
        </button>
      </div>
    </form>
  )
}

export default Form
