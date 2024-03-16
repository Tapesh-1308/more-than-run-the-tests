import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Split from "react-split";

import { appContext } from "../context/AppContext";
import { CSS_STARTER, HTML_STARTER, JS_STARTER } from "../utils/constants";
import { ChallengeInfo, CodeEditor, LogoLoader, Preview } from "../components";

const Challenge = () => {
	const [isInfoLoaded, setIsInfoLoaded] = useState(false);
	const [isEditorLoaded, setIsEditorLoaded] = useState(false);

	const { challengeId } = useParams();
	const {
		setChallengeId,
		setHtmlCode,
		setCSSCode,
		setFeedback,
		setJsCode,
		isLoadingPage,
		setIsLoadingPage,
	} = useContext(appContext);

	const resetStates = () => {
		setChallengeId(challengeId);
		setHtmlCode(HTML_STARTER);
		setCSSCode(CSS_STARTER);
		setJsCode(JS_STARTER);
		setFeedback([]);
	};

	useEffect(() => {
		resetStates();
	}, [challengeId]);

	useEffect(() => {
		if (isInfoLoaded && isEditorLoaded) {
			setIsLoadingPage(false);
		}
	}, [isInfoLoaded, isEditorLoaded]);

	return (
		<div
			className="bg-[#0A0E0F] w-full"
			style={{ height: "calc(100vh - 3rem)" }}
		>
			{isLoadingPage && <LogoLoader />}
			<Split minSize={300} style={{ height: "100%", display: "flex" }}>
				<ChallengeInfo setIsInfoLoaded={setIsInfoLoaded} />
				<CodeEditor setIsEditorLoaded={setIsEditorLoaded} />
				<Preview />
			</Split>
		</div>
	);
};

export default Challenge;
