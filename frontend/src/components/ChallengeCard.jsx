import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ChallengeCard = ({ challenge }) => {
	const navigate = useNavigate();
	return (
		<li className="border-b-[1px] rounded-md rounded-b-none border-slate-600 p-4 flex justify-between items-center m-1 md:m-2 hover:bg-[#171B1D] transition-all">
			<p className="text-slate-300 text-lg font-medium">{challenge.title}</p>
			<Button
				onClick={() => navigate(`/challenges/${challenge.id}`)}
				label={"Solve"}
			/>
		</li>
	);
};

export default ChallengeCard;
