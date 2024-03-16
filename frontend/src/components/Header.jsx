import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className="w-full flex items-center justify-center shadow-md bg-[#1F1F1F]">
			<img
				src={Logo}
				className="w-12 h-12"
				onClick={() => navigate("/") }
			/>
		</header>
	);
};

export default Header;
