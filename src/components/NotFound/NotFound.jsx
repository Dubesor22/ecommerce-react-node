import React from 'react'
// import { useNavigate } from 'react-router';
import "./NotFound.css";

export default function NotFound() {
	// const navigate = useNavigate();
	// function handleSubmit(){
	// 	navigate("/products");
	// }
  return (
    // <div className="not">
    //     <div className="terminal">
	// 		<h3>ERROR 404</h3>
    //         <h2 className="prompt">Oh oh, parece que te has perdido.</h2><h2 className="prompt">Prueba a clicar en el botón de Tienda para poder comprarte algo bonito.</h2>
    //         <input
    //             onClick={handleSubmit}
    //             type="submit"
    //             value="Tienda"
    //             className="btn btn-block btn-primary padding"
    //           />
    //     </div>
    // </div>
	<>
		<div id="body">
			<div id="div">Hola<br/>Bro</div> 
			<div  id="div"> 
				<span>¿Te has perdido?<br/>, deberías volver atras.</span>
			</div>
		</div>
	</>
  )
}
