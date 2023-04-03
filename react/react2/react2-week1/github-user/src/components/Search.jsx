import React from "react";
import { useContext } from "react";
import { userContext } from "./UserContext";

const Search = () => {
  const usingContext = useContext(userContext);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter the User name"
        onChange={usingContext.search}
      />
      <>
        {usingContext.loading && <p>...Loading</p>}
        {usingContext.error && <p>Error in Fetching{usingContext.error}</p>}
      </>
      {usingContext.output.length === 0 || usingContext.input === "" ? (
        <p>No User Found</p>
      ) : (
        <ul>
          {usingContext.output.map((eachUser) => (
            <li className="list" key={eachUser.id}>
              {eachUser.login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Search;
