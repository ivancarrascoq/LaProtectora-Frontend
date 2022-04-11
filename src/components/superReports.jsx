import React, { Component } from 'react';

const SuperReports = (props) => {
    return ( 
        <React.Fragment>
        <h1>Reportes Superintendencia</h1>
        {/*  */}
        {/* <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
        {/*  */}
		<form className="form-horizontal" action="../post_filter" method="post">
	          <input type="hidden" name="csrfmiddlewaretoken" value="JlnaZt3IAjRd9kEkDe5zZ5vMIZSpO9HjCYTPlANOPu9ArwouWVrNLLEymbG1MOrx"/>
		  <table className="table-condensed">
		    <thead>
		      <tr>
		        <th>Fecha Inicio</th>
		        <th>Fecha Término</th>
		        <th>Centro de Costo</th>
		        <th>Subvención</th>
		        {/* <th><--operador--></th> */}
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td><input id="f_date_s" name="f_date_s" type="date" placeholder="dd/mm/yyyy" className="form-control" required/></td>
		        <td><input id="f_date_f" name="f_date_f" type="date" placeholder="dd/mm/yyyy" className="form-control" required/></td>
		        <td>
                    <select id="f_cc" name="f_cc" className="form-select" multiple aria-label="multiple select example" required>
                          <option selected></option>
                	      <option value="1">Centro Parvulario</option>
                	      <option value="2">Josefina Gana de Johnson</option>
                	      <option value="3">Miguel Cruchaga Tocornal</option>
                	      <option value="4">Luis García de la Huerta</option>
                	      <option value="5">Técnico Las Nieves</option>
                	      <option value="6">Industrial Las Nieves</option>
                	      <option value="7">Gerencia Educación</option>
                    </select>
		        </td>
		        <td>
                    <select id="f_sub" name="f_sub" className="form-select" multiple aria-label="multiple select example" required>
			          <option selected></option>
                	  <option value="1">General</option>
                	  <option value="2">Sep</option>
                	  <option value="3">Pie</option>
                	  <option value="4">Proretencion</option>
                	  <option value="5">Mantenimiento</option>
                	  <option value="6">Donacion</option>
                	  <option value="7">General Gerencia</option>
                	  <option value="8">Sep Gerencia</option>
                	  <option value="10">Proyectos</option>
                	  <option value="11">Fira</option>
                	  <option value="9">-</option>
              		</select>
		        </td>
		        <td><input type="submit" value="Generar" className="btn btn-primary"/></td>
		      </tr>
		    </tbody>
		  </table>
		</form>
        {/* <!-- gen2-start --> */}
		<form className="form-horizontal" action="../post_filter2" method="post">
	          <input type="hidden" name="csrfmiddlewaretoken" value="JlnaZt3IAjRd9kEkDe5zZ5vMIZSpO9HjCYTPlANOPu9ArwouWVrNLLEymbG1MOrx"/>
		  <table className="table-condensed">
		    <thead>
		      <tr>
		        <th>Rendición <i>(las rendiciones pueden estar separadas por coma)</i></th>
		        {/* <th><--operador--></th> */}
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td><input id="rend2" name="rend2" type="text" placeholder="ej: 1,2,3" className="form-control" required/></td>
		        <td><input type="submit" value="Generar" className="btn btn-primary"/></td>
		      </tr>
		    </tbody>
		  </table>
		</form>
        </React.Fragment>
     );
}
 
export default SuperReports;