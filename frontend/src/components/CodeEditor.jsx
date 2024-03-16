import Editor from "@monaco-editor/react";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../context/AppContext";
const CodeEditor = ({setIsEditorLoaded}) => {
	const {
		challengeId,
		setFeedback,
		htmlCode,
		cssCode,
		jsCode,
		setHtmlCode,
		setCSSCode,
		setJsCode,
		isRunningTests,
		setIsRunningTests,
	} = useContext(appContext);

	const [tab, setTab] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll(".editor-parent section");

		sections.forEach((section) => {
			if (section.firstChild.classList.contains("block")) {
				section.classList.add("!flex");
				section.classList.remove("!hidden");
			} else {
				section.classList.remove("!flex");
				section.classList.add("!hidden");
			}
		});
	}, [tab]);

	const validateHTML = () => {
		setIsRunningTests(true);
		fetch(`/api/validate-html-css-js/${challengeId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ htmlCode, cssCode, jsCode }),
		})
			.then((response) => response.json())
			.then((data) => {
				setFeedback(data.data);
			})
			.catch((error) => {
				console.error("Error:", error);
			})
			.finally(() => {
				setIsRunningTests(false);
			});
	};
	return (
		<div className="flex flex-col items-end w-full editor-parent h-full max-h-full">
			<div className="text-slate-300 flex justify-start w-full p-2 gap-2">
				<button
					className={`${
						tab === "index.html" && "bg-[#1e1e1e]"
					}  py-1 px-2 text-sm rounded-md`}
					onClick={() => setTab("index.html")}
				>
					index.html
				</button>
				<button
					className={`${
						tab === "styles.css" && "bg-[#1e1e1e]"
					}  py-1 px-2 text-sm rounded-md`}
					onClick={() => setTab("styles.css")}
				>
					styles.css
				</button>
				<button
					className={`${
						tab === "script.js" && "bg-[#1e1e1e]"
					}  py-1 px-2 text-sm rounded-md`}
					onClick={() => setTab("script.js")}
				>
					script.js
				</button>
			</div>

			<Editor
				defaultLanguage="html"
				defaultValue="<h1>Hello World!</h1>"
				onChange={(value) => setHtmlCode(value)}
				theme="vs-dark"
				value={htmlCode}
				className={`${tab === "index.html" ? "block" : "hidden"}`}
				onMount={() => {setTab("index.html"), setIsEditorLoaded(true)}}
				options={{ minimap: { enabled: false } }}
			/>

			<Editor
				defaultLanguage="css"
				defaultValue="/* Write CSS Code */"
				onChange={(value) => setCSSCode(value)}
				theme="vs-dark"
				value={cssCode}
				className={`${tab === "styles.css" ? "block" : "hidden"}`}
				options={{ minimap: { enabled: false } }}
			/>

			<Editor
				defaultLanguage="javascript"
				defaultValue="// Write js code here"
				onChange={(value) => setJsCode(value)}
				theme="vs-dark"
				value={jsCode}
				className={`${tab === "script.js" ? "block" : "hidden"}`}
				options={{ minimap: { enabled: false } }}
			/>

			<div className="flex">
				<Button
					onClick={validateHTML}
					label={"Run The Tests"}
					type="secondary"
					disabled={isRunningTests}
					className={
						isRunningTests && "bg-gray-800 text-slate-500 cursor-not-allowed"
					}
				/>
				<Button onClick={() => {}} label={"Submit"} />
			</div>
		</div>
	);
};

export default CodeEditor;