import { useState, useEffect } from "react";
import { generarId } from "./helpers";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";
import Footer from "./components/Footer";
import Swal from "sweetalert2";

const App = () => {
	const [tareas, setTareas] = useState(
		JSON.parse(localStorage.getItem("tareas")) || []
	);
	const [tarea, setTarea] = useState("");
	const [responsableTarea, setResponsableTarea] = useState("");
	const [alerta, setAlerta] = useState({});

	// guardar tareas en local storage
	useEffect(() => {
		localStorage.setItem("tareas", JSON.stringify(tareas));
	}, [tareas]);

	//notificacion de alerta al crear una tarea
	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		},
	});

	const handleSubmitFormAgregarTarea = (e) => {
		e.preventDefault();
		// validar formulario
		if (tarea.trim() === "" || responsableTarea.trim() === "") {
			//mensaje de error
			Swal.fire({
				icon: "error",
				text: "Todos los campos son obligatorios",
				confirmButtonText: "Ok",
				width: "400px",
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
			//notificacion al crear una tarea
			Toast.fire({
				icon: "success",
				title: "Tarea creada",
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

	const { msg } = alerta;

	return (
		<>
			<Header />
			<main className="flex container mx-auto gap-5 mt-10">
				<div className="container w-1/2 mx-auto shadow-lg bg-white">
					<h2 className="text-center text-xl font-bold mt-5">
						Agrega tus tareas
					</h2>
					<form
						onSubmit={handleSubmitFormAgregarTarea}
						className="flex flex-col px-10 mt-5 pb-10"
					>
						<label className="font-bold">
							Tarea asignada a
							<input
								value={responsableTarea}
								onChange={(e) => setResponsableTarea(e.target.value)}
								className="font-normal bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
								type="text"
							/>
						</label>
						<label className="mt-5 font-bold">
							Tarea
							<input
								value={tarea}
								onChange={(e) => setTarea(e.target.value)}
								className="font-normal bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
								type="text"
							/>
						</label>
						<button
							onClick={handleSubmitFormAgregarTarea}
							className="bg-sky-700 p-2 text-white font-bold w-1/2 rounded-full mx-auto mt-5 mb-2 transition-colors hover:bg-sky-900"
						>
							Agregar
						</button>
					</form>
				</div>
				<div className="w-1/2 mx-auto shadow-lg bg-white px-10">
					<h2 className="text-center text-xl font-bold my-5">
						Listado de tareas
					</h2>
					<ListadoTareas tareas={tareas} setTareas={setTareas} />
				</div>
			</main>
		</>
	);
};

export default App;
