import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
// import { getSupplier } from "../services/proveedoresService";

// class CreateEditSupplier extends Component {
    // render() {
        // const s = this.props.supplierDetails;
        // const s = this.state.supplier;
        // const editId = this.props.editId;
        //  console.log(s);
const CreateEditSupplier = ({details, editId, editType}) => {

    const s = details;
    // console.log(s, editId, editType);
    // console.log(s);
    // const editId = editId;
    if ( editType === "supplier"){
      if ( editId === 0 ) {
        return (
          <React.Fragment>
            <form className="mb-3">
              <div className="mb-3 row">
                <label for="inputName" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputName" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputRut" className="col-sm-2 col-form-label">Rut</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputRut"/>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-2">
                Grabar
              </button>
            </form>
          </React.Fragment>
        );
      };
      return (
        <React.Fragment>
          <form className="mb-3">
            <label className="form-label">ID</label>
            <input
              className="form-control"
              type="text"
              value={s.id}
              disabled
              readonly
            />
            <label for="nombreField" className="form-label">
              Nombre
            </label>
            <input
              type="name"
              value={s.nombre}
              className="form-control"
              id="nombreField"
            />
            <label for="rutField" className="form-label">
              RUT
            </label>
            <input
              type="rut"
              value={s.rut}
              className="form-control"
              id="rutField"
            />
            <button type="submit" class="btn btn-primary mt-2">
              Editar Proveedor
            </button>
            <button
              onClick={() => this.props.editToZero}
              className="btn btn-danger ml-2 mt-2"
            >
              Cancelar
            </button>
          </form>
        </React.Fragment>
      );
    };  
    if ( editType === "user"){
      if ( editId === 0 ) {
        return (
          <React.Fragment>
            <form className="mb-3">
              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="staticEmail" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword"/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="selectGroup" className="col-sm-2 col-form-label">Grupo</label>
                <div className="col-sm-10">
                  <select id="selectGroup" class="form-control">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-2">
                Grabar
              </button>
            </form>
          </React.Fragment>
        );
      };
      return (
        <React.Fragment>
            <form className="mb-3">
              <div className="mb-3 row">
                <label for="inputID" className="col-sm-2 col-form-label">ID</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputID" value={s.id} disabled readonly/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="staticEmail" value={s.username} disabled readonly/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputName" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputName" value={s.name}/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" placeholder="cambiar contrasena"/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="selectGroup" className="col-sm-2 col-form-label">Grupo</label>
                <div className="col-sm-10">
                  <select id="selectGroup" class="form-control">
                    <option selected value="grupo_selected">grupo</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            <button type="submit" class="btn btn-primary mt-2">
              Editar Usuario
            </button>
            <button
              onClick={() => this.props.editToZero}
              className="btn btn-danger ml-2 mt-2"
            >
              Cancelar
            </button>
          </form>
        </React.Fragment>
      );
    };

};

// }
export default CreateEditSupplier;
