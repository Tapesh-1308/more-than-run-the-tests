import Logo from "../assets/logo.svg";

const LogoLoader = () => {
	return (
		<div className="absolute min-h-[calc(100vh - 4rem)] h-full w-full bg-[#0A0E0F] flex justify-center items-center">
			<img
				src={Logo}
				className="w-20 h-20 animate-pulse"
			/>
		</div>
	);
};

export default LogoLoader;
