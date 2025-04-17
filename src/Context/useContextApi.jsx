import { useState, createContext, useEffect } from "react";

export const ContextProvider = createContext();

const UseContextApi = ({ children}) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(notes));
  }, [notes]);
  const searchNotes = () =>
    notes.filter((note) =>
      (note.title || note.desc)
        ?.toLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  return (
    <ContextProvider.Provider
      value={{ notes, setNotes, search, setSearch, searchNotes }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default UseContextApi;
