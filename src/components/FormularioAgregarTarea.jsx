const FormularioAgregarTarea = () => {
	return (
		<>
			<div className="container w-1/2 mx-auto shadow-lg bg-white">
				<form className="flex flex-col p-10">
					<label className="">
						Tarea asignada a
						<input
							className="bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
							type="text"
						/>
					</label>
					<label className="mt-5">
						Tarea
						<input
							className="bg-sky-100 mt-3 py-2 px-5 w-full rounded-full"
							type="text"
						/>
					</label>
					<button className="bg-sky-700 p-2 text-white font-bold w-1/2 rounded-full mx-auto mt-4 transition-colors hover:bg-sky-900">
						Agregar
					</button>
				</form>
			</div>
		</>
	);
};

export default FormularioAgregarTarea;
