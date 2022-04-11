import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getRendicionesAbiertas, getRendicionesCerradas } from '../services/rendicionesService';
import '../dashboard.css';
import 'bootstrap/dist/css/bootstrap.css';

class RendicionesAyC extends Component {
    state = {
      counter1: 0,
      counter2: 0,
      rendA: getRendicionesAbiertas(),
      rendC: getRendicionesCerradas()
      };

    render() { 
        // console.log(this.state.rendA);
        return (
          <React.Fragment>
              <div className="row">
              <div className="col-md-6">
                <h2>Rendiciones Abiertas</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col" className='text-nowrap'>mes gasto</th>
                        <th scope="col">subvencion</th>
                        <th scope="col">email</th>
                      </tr>
                    </thead>
                    <tbody>
                        { this.state.rendA.map((rend,i) => (
                          <React.Fragment>
                            <tr key={ rend }>
                              <td key={ i+1 }>{ i+1 }</td>
                              <td key={ rend.id }>
                                <a href ={'/rendicion/' + rend.id }>{ rend.id } </a>
                              </td>
                              <td key={ rend.mes_gasto }>{ rend.mes_gasto }</td>
                              <td key={ rend.subvencion }>{ rend.subvencion }</td>
                              <td key={ rend.username }>{ rend.username }</td>
                            </tr>
                          </React.Fragment>
                        ))
                        }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Rendiciones Cerradas</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">id</th>
                      <th scope="col" className='text-nowrap'>mes gasto</th>
                      <th scope="col">subvencion</th>
                      <th scope="col">email</th>
                      <th scope="col">Adjunto</th>
                    </tr>
                  </thead>
                  <tbody>
                      { this.state.rendC.map((rend,i) => (
                        <React.Fragment>
                          <tr key={ rend }>
                            <td key={ i+1 }>{ i+1 }</td>
                            <td key={ rend.id }>
                              <Link to={ "/reportes/" + rend.id }>
                                { rend.id }
                              </Link>
                            </td>
                            <td key={ rend.mes_gasto }>{ rend.mes_gasto }</td>
                            <td key={ rend.subvencion }>{ rend.subvencion }</td>
                            <td key={ rend.username }>{ rend.username }</td>
                            <td key={ rend }>{ rend.attached && <span className="fa-solid fa-file"></span> }</td>
                          </tr>
                        </React.Fragment>
                      )
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </React.Fragment>
        );
    }
}
 
export default RendicionesAyC;