import React, { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import Form from "react-bootstrap/Form";

function ModalColor(props) {

  const { changeBodyColor } = props;

  const changeColor = (e) => {
   const colorVal = e.target.value;
    changeBodyColor(colorVal);
  };

  return (
    <div className="modal-color">
      {/* <MdOutlineColorLens className="modal-color" /> */}
      <Form.Control
        type="color"
        defaultValue="#FF7F50"
        title="Choose your color"
        onChange={(e) => changeColor(e)}
        
      />
    </div>
  );
}

export default ModalColor;
