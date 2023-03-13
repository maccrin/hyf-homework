import { createContext, useCallback, useEffect, useState } from "react";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState([]);

  const search = useCallback(async (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value) {
      setLoading(true);
      try {
        const result = await fetch(
          `https://api.github.com/search/users?q=${e.target.value}`
        );
        const data = await result.json();
        setOutput(data.items);
      } catch (error) {
        setError(error.message);
      }
    }
    setLoading(false);
  }, []);
  return (
    <div className="child">
      <userContext.Provider value={{ input, loading, error, output, search }}>
        {children}
      </userContext.Provider>
    </div>
  );
};
export default UserProvider;
