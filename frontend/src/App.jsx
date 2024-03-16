import { Outlet } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import { Header } from "./components";

const App = () => {
	return (
		<AppContextProvider>
			<main className="flex flex-col items-center w-full">
				<Header />
				<Outlet />
			</main>
		</AppContextProvider>
	);
};

export default App;
