import React, { Component } from 'react';
// import Head from './head';
// import Header from './header';
// import NavBar from './navbar';
import RendicionesAyC from './rendicionesAyC';


class Dashboard extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>     
                {/* <Head />
                <Header /> */}
                {/* <div className="container-fluid">
                  <div className="row">
                  <NavBar /> */}
                  {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}
                    {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                      <h1 className="h2">Dashboard</h1>
                      <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                      </div>
                      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                      <span data-feather="calendar"></span>
                      This week
                      </button>
                      </div>
                      </div>
                    <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
                    <RendicionesAyC />
                  {/* </main> */}
                {/* </div>
              </div> */}
                {/* <script src="static/assets/dist/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="static/dashboard/dashboard.js"></script> */}

            </React.Fragment>
        );
    }
}

export default Dashboard;