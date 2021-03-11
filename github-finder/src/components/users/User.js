import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <h1>Loading</h1>;
    return (
      <>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
      </>
    );
  }
}

export default User;
