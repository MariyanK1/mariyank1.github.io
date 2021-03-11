import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => this.setState({ [e.target.type]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Search users..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {showClear ? (
            <button className="btn btn-light btn-block" onClick={clearUsers}>
              Clear
            </button>
          ) : null}
        </form>
      </div>
    );
  }
}
