import { TareasProvider } from "./context/TareasProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaTareas from "./components/ListaTareas";
import FormularioAgregarTarea from "./components/FormularioAgregarTarea";

const App = () => {
	return (
		<>
			<TareasProvider>
				<Header />
				<div className="container mx-auto mt-10 flex gap-5">
					<FormularioAgregarTarea />
					<ListaTareas />
				</div>
				<Footer />
			</TareasProvider>
		</>
	);
};

export default App;
