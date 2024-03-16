import { createContext, useState } from "react";
import { CSS_STARTER, HTML_STARTER, JS_STARTER } from "../utils/constants";

export const appContext = createContext({
	challengeId: "",
	feedback: [],
	htmlCode: "",
	cssCode: "",
	jsCode: "",
	isLoadingPage: true,
	isRunningTests: false,
	setFeedback: () => {},
	setHtmlCode: () => {},
	setCSSCode: () => {},
	setJsCode: () => {},
	setIsLoadingPage: () => {},
	setIsRunningTests: () => {},
});

const AppContextProvider = ({ children }) => {
	const [challengeId, setChallengeId] = useState("");
	const [feedback, setFeedback] = useState([]);
	const [htmlCode, setHtmlCode] = useState(HTML_STARTER);
	const [cssCode, setCSSCode] = useState(CSS_STARTER);
	const [jsCode, setJsCode] = useState(JS_STARTER);
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isRunningTests, setIsRunningTests] = useState(false);

	return (
		<appContext.Provider
			value={{
				challengeId,
				setChallengeId,
				feedback,
				setFeedback,
				htmlCode,
				setHtmlCode,
				cssCode,
				setCSSCode,
				jsCode,
				setJsCode,
				isLoadingPage,
				setIsLoadingPage,
				isRunningTests,
				setIsRunningTests,
			}}
		>
			{children}
		</appContext.Provider>
	);
};

export default AppContextProvider;
