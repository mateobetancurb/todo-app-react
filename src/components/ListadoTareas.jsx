import Swal from "sweetalert2";

const ListadoTareas = ({
	setTarea,
	tareas,
	setTareas,
	setResponsableTarea,
	responsableTarea,
	setModoEdicion,
	tarea,
}) => {
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

	const handleEliminarTarea = (id) => {
		//confirmacion de eliminacion de tarea
		Swal.fire({
			text: "¿Quieres eliminar la tarea?",
			icon: "warning",
			iconColor: "#d33",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#0268a0",
			confirmButtonText: "Eliminar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				//eliminacion de tarea
				const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
				setTareas(nuevasTareas);

				//notificacion al eliminar una tarea
				Toast.fire({
					icon: "success",
					title: "Tarea eliminada",
				});
			}
		});
	};

	//editar tarea
	const handleEditarTarea = (id) => {
		// confirmacion de edicion de tarea
		Swal.fire({
			text: "¿Quieres editar la tarea?",
			icon: "warning",
			iconColor: "#d33",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#0268a0",
			confirmButtonText: "Editar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				// filtrar la tarea a editar
				const tareaEncontrada = tareas.find((t) => t.id === id);

				// actualizar los campos de tarea y responsableTarea
				setTarea(tareaEncontrada.tarea);
				setResponsableTarea(tareaEncontrada.responsableTarea);

				// cambiar el estado de modoEdicion a true
				setModoEdicion(true);

				// eliminar la tarea existente del arreglo tareas
				const nuevasTareas = tareas.filter((t) => t.id !== id);
				setTareas(nuevasTareas);
			}
		});
	};

	return (
		<div className="">
			{tareas.length === 0 ? (
				<div className="flex justify-center items-center h-1/2 mb-10">
					<p>No hay tareas pendientes</p>
				</div>
			) : (
				<>
					{tareas.map((tarea) => (
						<div
							key={tarea.id}
							className="flex justify-between bg-sky-100 my-3 p-3 md:px-4 md:mx-6 rounded-3xl"
						>
							<div>
								<p className="font-bold">
									Tarea: <span className="font-normal">{tarea.tarea}</span>{" "}
								</p>
								<p className="font-bold">
									Para:{" "}
									<span className="font-normal">{tarea.responsableTarea}</span>{" "}
								</p>
							</div>
							<div className="flex gap-1 md:gap-3 items-center">
								<button
									onClick={() => handleEditarTarea(tarea.id)}
									className="transition-colors hover:bg-sky-700 hover:text-white p-2 rounded-full"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
										/>
									</svg>
								</button>
								<button
									onClick={() => handleEliminarTarea(tarea.id)}
									className="transition-colors hover:bg-sky-700 hover:text-white p-2 rounded-full"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default ListadoTareas;
