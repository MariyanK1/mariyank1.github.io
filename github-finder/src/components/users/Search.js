import { useContext, useState } from "react";

import GithubContext from "../../context/github/githubContext";

function Search({ showClear, clearUsers, setAlert }) {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={onChange} placeholder="Search users..." />
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

export default Search;
