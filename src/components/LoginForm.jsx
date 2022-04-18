import { isNull } from "lodash";
import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Contrasena"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    // option non compacted
    // const { error } = Joi.validate(this.state.account, this.schema, {abortEarly: false});
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, this, schema);
    return error ? error.details[0].message : null;
    // long way
    // if (error) return null;
    // return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }; // clone a place into a const account
    // console.log(e.currentTarget.name);
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateProperty();
    // console.log(errors);

    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
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
            error={errors.email}
          />
          <Input
            label="Contrasena"
            name="password"
            value={account.password}
            onChange={this.handleChange}
            type="password"
            error={errors.password}
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
          <button
            disabled={this.validate()}
            type="submit" className="btn btn-primary">
            Acceder
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
