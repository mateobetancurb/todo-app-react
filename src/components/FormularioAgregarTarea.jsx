import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import { generarId } from "../helpers";

const FormularioAgregarTarea = () => {
	const [tareas, setTareas] = useState([]);
	const [tarea, setTarea] = useState("");
	const [responsableTarea, setResponsableTarea] = useState("");
	const [alerta, setAlerta] = useState({});

	const handleSubmitFormAgregarTarea = (e) => {
		e.preventDefault();
		// validar formulario
		if (tarea.trim() === "" || responsableTarea.trim() === "") {
			setAlerta({
				error: true,
				msg: "Todos los campos son obligatorios",
			});
			return;
		}

		//al pasar las validaciones, se agrega la tarea
		try {
			const nuevaTarea = {
				tarea,
				responsableTarea,
				id: generarId(),
			};
			setTareas([...tareas, nuevaTarea]);
			setAlerta({
				error: false,
				msg: "Tarea agregada correctamente",
			});
		} catch (error) {
			console.log(error);
		} finally {
			setTarea("");
			setResponsableTarea("");
			setTimeout(() => {
				setAlerta({});
			}, 3000);
		}
	};
	console.log(tareas);

	const { msg } = alerta;
	return (
		<>
			<div className="container w-1/2 mx-auto shadow-lg bg-white">
				<form
					onSubmit={handleSubmitFormAgregarTarea}
					className="flex flex-col p-10"
				>
					<label className="">
						Tarea asignada a
						<input
							value={responsableTarea}
							onChange={(e) => setResponsableTarea(e.target.value)}
							className="bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
							type="text"
						/>
					</label>
					<label className="mt-5">
						Tarea
						<input
							value={tarea}
							onChange={(e) => setTarea(e.target.value)}
							className="bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
							type="text"
						/>
					</label>
					<button
						onClick={handleSubmitFormAgregarTarea}
						className="bg-sky-700 p-2 text-white font-bold w-1/2 rounded-full mx-auto mt-4 transition-colors hover:bg-sky-900"
					>
						Agregar
					</button>
					{msg ? <Alerta alerta={alerta} /> : null}
				</form>
			</div>
		</>
	);
};

export default FormularioAgregarTarea;
