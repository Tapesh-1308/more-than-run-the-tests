import { useContext, useEffect, useState } from "react";
import { appContext } from "../context/AppContext";

const Preview = () => {
	const { htmlCode, cssCode, jsCode } = useContext(appContext);
	const [mergedCode, setMergedCode] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMergedCode(`
                <html>
                    <head>
                        <style>${cssCode}</style>
                    </head>
                    <body>${htmlCode}<script>${jsCode}</script></body>
                </html>
            `);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [htmlCode, cssCode, jsCode]);

	return (
		<div className="bg-white overflow-auto h-full min-h-[calc(100% - 4rem)]">
			<h1 className="text-slate-300 flex justify-start w-full p-2 gap-2 bg-[#0A0E0F]">
				Preview
			</h1>
			<iframe
				title="Preview"
				srcDoc={mergedCode}
				className="w-full h-full  bg-white"
			/>
		</div>
	);
};

export default Preview;
