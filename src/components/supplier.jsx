import React, { Component } from "react";

class Supplier extends Component {
  state = {
    supplier: this.props.supplier,
    index: this.props.index,
    editId: this.props.editId,
  };
  
  render() {
    // console.log('props', this.props.value);
    const {supplier, index, editId} = this.props;
    const {bgStyle, onDelete, onEdit} = this.props;

    // const i = this.state.index;
    // const bg = '';
    // if ( this.state.editId !== 0 ) {
    //     bg += 'background: "rgb(255, 255, 114) none repeat scroll 0% 0%" '; 
    // };
    // console.log('supplier id:   ',supplier.id);
    // console.log(supplier.id, editId);
    if (supplier === 0) return true;
    return (
      <React.Fragment>
        <tr key={supplier.id} style={ bgStyle(supplier.id) }
        >
          <td>{index}</td>
          <td>
            {supplier.id}-{supplier.nombre}
          </td>
          <td>{supplier.rut}</td>
          <td>
            <button
              onClick={() => onDelete(supplier.id)}
              className="btn btn-danger btn-sm"
            //   disabled={ editId === supplier.id ? "disabled" : ""}
              disabled={ editId !== 0 ? "disabled" : ""}
              >
              Borrar
            </button>
            <button
              onClick={() => onEdit(supplier.id)}
              className="btn btn-warning btn-sm ml-2"
              disabled={ editId === supplier.id ? "disabled" : ""}
            >
              Editar
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Supplier;
