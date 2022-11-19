const ListadoTareas = ({ tareas }) => {
	return (
		<div>
			{tareas.map((tarea) => (
				<div
					key={tarea.id}
					className="flex justify-between bg-sky-100 mb-3 p-3 rounded-3xl"
				>
					<div className="px-10">
						<p className="font-bold">
							Tarea: <span className="font-normal">{tarea.tarea}</span>{" "}
						</p>
						<p className="font-bold">
							Responsable:{" "}
							<span className="font-normal">{tarea.responsableTarea}</span>{" "}
						</p>
					</div>
					
				</div>
			))}
		</div>
	);
};

export default ListadoTareas;
