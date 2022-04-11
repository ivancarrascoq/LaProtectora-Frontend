import React, { Component } from "react";
import {
  getUsers,
  getUserById,
//   getUserByEmail,
} from "../services/usuariosService";
import User from "./user.jsx";
// import createEditSupplierForm from "./createEditSupplierForm";
import CreateEditSupplier from "./createEditSupplierForm";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';

class Users extends Component {
  state = {
    users: getUsers(),
    currentPage: 1,
    pageSize: 6,
    editId: 0,
    // totalSuppliers: getTotalSuppliers(),
    search_user: "",
  };

  handleSearchUser = (q) => {
    // console.log(q.target.value);
    // api to search
  };

  handleEditUser = (editId) => {
    // console.log(editId);
    this.setState({ editId });
    // return this.handleFormCreateOrEdit(id);
  };

  handleEditToZero = () => this.setState({ editId: 0 });

  handleDelete = (userId) => {
    const users = this.state.users.filter((s) => s.id !== userId);
    this.setState({ users });
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
    const { length: count } = this.state.users;
    const { editId, pageSize, currentPage, users: allUsers } = this.state;

    if (count === 0) return <p>No hay registros</p>;

    const users = paginate(allUsers, currentPage, pageSize);
    
    return (

      <React.Fragment>
      <h1>Usuarios</h1>
        {
          <CreateEditSupplier
            key={editId}
            editId={editId}
            details={getUserById(editId)}
            editToZero={this.handleEditToZero}
            editType="user"
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
              onChange={(q) => this.handleSearchUser(q)}
              className="form-control"
              placeholder="Buscar usuario..."
            />
          </div>
        </div>

        <p>
          Hay <b>{count}</b> usuarios
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>username</th>
              <th>email</th>
              <th>Admin</th>
              <th>Grupo</th>
              <th>Operacion</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <User
                key={user.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEditUser}
                user={user}
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

export default Users;
