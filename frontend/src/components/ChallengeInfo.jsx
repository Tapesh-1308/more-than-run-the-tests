import { useContext, useEffect, useState } from "react";
import { appContext } from "../context/AppContext";
import { BASE_URL } from "../utils/constants";

const ChallengeInfo = ({setIsInfoLoaded}) => {
	const { challengeId, feedback, isRunningTests } =
		useContext(appContext);
	const [testCases, setTestCases] = useState([]);
	const [challengeData, setChallengeData] = useState({});

	const getChallengeById = async (challengeId) => {
		try {
			const response = await fetch(`${BASE_URL}/api/getChallengeById/${challengeId}`);
			const data = await response.json();
			setChallengeData(data?.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const getTestCasesByChallengeId = async (challengeId) => {
		try {
			const response = await fetch(`${BASE_URL}/api/${challengeId}/testCases`);
			const data = await response.json();
			setTestCases(data.data);
		} catch (error) {
			console.error("Error: getChallengesById");
		} finally {
			setIsInfoLoaded(true);
		}
	};

	useEffect(() => {
		getChallengeById(challengeId);
		getTestCasesByChallengeId(challengeId);
	}, [challengeId]);

	return (
		<div className="w-full  p-4 flex flex-col gap-4  text-justify overflow-auto">
			<h1 className="font-semibold text-2xl text-slate-200">
				{challengeData?.title}
			</h1>
			<p className="text-slate-300">{challengeData.description}</p>
			<h3 className="font-semibold text-lg text-slate-200">Test Cases:</h3>
			<ul className=" text-slate-400">
				{testCases.map((testCase, index) => (
					<li key={testCase.id}>
						{isRunningTests
							? "⏳"
							: feedback.length > 0
							? feedback[index] === "passed"
								? "✅"
								: "❌"
							: "👉"}
						{testCase.description}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChallengeInfo;
