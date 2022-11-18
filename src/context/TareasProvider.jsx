import { createContext, useState, useEffect } from "react";

const TareasContext = createContext();

const TareasProvider = ({ children }) => {
	const [tareas, setTareas] = useState([]);
	const [tarea, setTarea] = useState("");
	return (
		<TareasContext.Provider value={{ tarea, tareas }}>
			{children}
		</TareasContext.Provider>
	);
};

export { TareasContext, TareasProvider };
