import { useEffect, useState } from "react";
import { ChallengeCard } from "../components";
import { BASE_URL } from "../utils/constants";

const Challenges = () => {
	const [challenges, setChallenges] = useState([]);
	const [isChallengesLoading, setIsChallengesLoading] = useState(true);

	const getAllChallenges = async () => {
		setIsChallengesLoading(true);
		try {
			const response = await fetch(`${BASE_URL}/api/getAllChallenges`);
			const data = await response.json();
			setChallenges(data.data);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setIsChallengesLoading(false);
		}
	};

	useEffect(() => {
		getAllChallenges();
	}, []);

	return (
		<div className="bg-[#0A0E0F] w-full flex flex-col items-center min-h-screen p-4">
			<h1 className="text-slate-50 font-semibold text-3xl">Challenges</h1>
			<ul className="flex flex-col p-2 md:m-4 text-white w-full max-w-[700px]">
				{isChallengesLoading ? (
					<>
						{Array(5)
							.fill("")
							.map((_, index) => (
								<li
									key={index}
									className="border-b-[1px] rounded-md rounded-b-none border-slate-600 p-4 m-1 md:m-2 bg-[#171B1D] min-h-[80px]"
								></li>
							))}
					</>
				) : (
					<>
						{challenges.length === 0 ? (
							<h1 className="font-bold text-white">No Result Found</h1>
						) : (
							challenges.map((challenge) => (
								<ChallengeCard key={challenge.id} challenge={challenge} />
							))
						)}
					</>
				)}
			</ul>
			<h1 className="text-slate-200">Made with ❤ by Tapesh</h1>
			<a
				className="text-slate-400 underline"
				href="https://linktr.ee/tapeshdua"
				target="_blank"
			>
				Click to know more.
			</a>
		</div>
	);
};

export default Challenges;
