import { createContext, useState, useEffect } from "react";

const TareasContext = createContext();

const TareasProvider = ({ children }) => {
	return <TareasContext.Provider value={{}}>{children}</TareasContext.Provider>;
};

export { TareasContext, TareasProvider };
