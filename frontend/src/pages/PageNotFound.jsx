import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import PageNotFoundImage from "../assets/page-not-found.svg";

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen flex items-center justify-center w-full flex-col bg-[#0A0E0F] gap-4">
			<img
				src={PageNotFoundImage}
				alt="404"
			/>
			<h1 className="text-white font-bold text-2xl">
				Whoops, that page is gone.
			</h1>
			<Button label={"Go Back"} onClick={() => navigate(-1)} />
		</div>
	);
};

export default PageNotFound;
