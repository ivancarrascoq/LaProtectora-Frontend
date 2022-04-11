import React, { Component } from "react";
import {
  getSuppliers,
  getSupplier,
//   getTotalSuppliers,
} from "../services/proveedoresService";
import Supplier from "./supplier.jsx";
// import createEditSupplierForm from "./createEditSupplierForm";
import CreateEditSupplier from "./createEditSupplierForm";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';

class Suppliers extends Component {
  state = {
    suppliers: getSuppliers(),
    currentPage: 1,
    pageSize: 6,
    editId: 0,
    // totalSuppliers: getTotalSuppliers(),
    search_supplier: "",
  };

  handleSearchSupplier = (q) => {
    // console.log(q.target.value);
    // api to search
  };

  handleEditSupplier = (editId) => {
    // console.log(editId);
    this.setState({ editId });
    // return this.handleFormCreateOrEdit(id);
  };

  handleEditToZero = () => this.setState({ editId: 0 });

  handleDelete = (supplierId) => {
    const suppliers = this.state.suppliers.filter((s) => s.id !== supplierId);
    this.setState({ suppliers });
  };

  handleBgStyle = (id) => {
    //   console.log('test BgStyle', id);
    if (this.state.editId === id) {
      return { background: "rgb(255, 255, 114) none repeat scroll 0% 0%" };
    }
    return {};
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    // console.log(page);
  };

  render() {
    const { length: count } = this.state.suppliers;
    const { editId, pageSize, currentPage, suppliers: allSuppliers } = this.state;

    if (count === 0) return <p>No hay registros</p>;

    const suppliers = paginate(allSuppliers, currentPage, pageSize);
    
    return (

      <React.Fragment>
      <h1>Proveedores</h1>
        {
          <CreateEditSupplier
            key={editId}
            editId={editId}
            details={getSupplier(editId)}
            editToZero={this.handleEditToZero}
            editType="supplier"
          />
        }
        <hr />

        <div class="mt-6 row">
          <label for="searchField" className="form-label col-sm-2">
            <h3>Buscar:</h3>
          </label>
          <div class="col-sm-10">
            <input
              id="searchField"
              onChange={(q) => this.handleSearchSupplier(q)}
              className="form-control"
              placeholder="Buscar proveedor..."
            />
          </div>
        </div>

        <p>
          Hay <b>{count}</b> proveedores
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>RUT</th>
              <th>Operacion</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, i) => (
              <Supplier
                key={supplier.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEditSupplier}
                supplier={supplier}
                editId={editId}
                bgStyle={this.handleBgStyle}
                index={(currentPage-1)*pageSize + (i + 1)}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Suppliers;
