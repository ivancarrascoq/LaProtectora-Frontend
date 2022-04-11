import { isNull } from "lodash";
import React, { Component } from "react";
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
		errors: {}
  };

	validate = () => {
		const errors = {};
		const { account } = this.state;
		if (account.email.trim() === '')
			errors.email = 'Email requerido.'
		if (account.password.trim() === '')
			errors.password = 'Contrasena requerida.'		
		
		return Object.keys(errors).length === 0 ? null : errors;
	};

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }; // clone a place into a const account
		// console.log(e.currentTarget.name);
    account[input.name] = input.value;
    this.setState({ account });
  };


  handleSubmit = (e) => {
    e.preventDefault();
		const errors = this.validate();
		// console.log(errors);
		
		this.setState({ errors: errors || {} });
		if (errors) return;
		// console.log('submitted');

  };
  render() {
		const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>      
					<Input
						label="Email"
						name="email"
        		value={account.email}
						onChange={this.handleChange}
						type="email"
						error={ errors.email }
						/>
					<Input
						label="Contrasena"
						name="password"
        		value={account.password}
						onChange={this.handleChange}
						type="password"
						error={ errors.password }
					/>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Acceder
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
