import React,{useContext} from "react";
import { themeContext } from "../../Context";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    // darkMode
    <div className="floatingDiv" style={{ color: darkMode ? "white" : "" }}>
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;