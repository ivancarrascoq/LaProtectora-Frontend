import React, { Component } from 'react';
import { getUserById } from '../services/usuariosService';

class User extends Component {
    state = { 
        // user: this.props.user,
        // index: this.props.index,
        // editId: this.props.editId,
        user: this.props.user,
        index: this.props.index,
        editId: this.props.editId,
     };

    // handleBgStyle = (id) => {
    // bgStyle = (id) => {
    //     //   console.log('test BgStyle', id);
    //     if (this.state.editId === id) {
    //     return { background: "rgb(255, 255, 114) none repeat scroll 0% 0%" };
    //     }
    //     return {};
    // };

    render() { 
        const { user, index, editId } = this.props;
        // console.log(user.email);
        // const {supplier, index, editId} = this.props;
        const { bgStyle, onDelete, onEdit } = this.props;
        return (
            <React.Fragment>
                <tr key={user.id} style={ bgStyle(user.id) }>
                    <td>{index}</td>
                    <td>
                        {user.id}-{user.username}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>{user.is_superuser}</td>
                    <td>{user.id}</td>
                    <td>
                <button
                    onClick={() => onDelete(user.id)}
                    className="btn btn-danger btn-sm"
                    disabled={ editId === user.id ? "disabled" : ""}
                    >
                Borrar
                </button>
                <button
                    onClick={() => onEdit(user.id)}
                    className="btn btn-warning btn-sm ml-2"
                    disabled={ editId === user.id ? "disabled" : ""}>
                Editar
                </button>
          </td>
        </tr>
        
            </React.Fragment>
        );
    }
}
 
export default User;