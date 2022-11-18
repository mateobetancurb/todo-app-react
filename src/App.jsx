import { TareasProvider } from "./context/TareasProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tareas from "./components/Tareas";

const App = () => {
	return (
		<>
			<TareasProvider>
				<Header />
				<Tareas />
				<Footer />
			</TareasProvider>
		</>
	);
};

export default App;
