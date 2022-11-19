const Alerta = ({ alerta }) => {
	return (
		<div
			className={`${
				alerta.error
					? "bg-red-200 text-red-800 text-center font-bold p-2 rounded-full mt-4"
					: "bg-sky-200 text-sky-700 font-bold text-center p-2 mt-4 rounded-full"
			}`}
		>
			{alerta.msg}
		</div>
	);
};

export default Alerta;
