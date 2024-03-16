const Button = ({ onClick, label, type = "primary", disabled, className }) => {
	return (
		<button
			className={`${
				type === "primary" ? "bg-green-700" : "bg-slate-700"
			} px-6 py-1 m-1 ${
				type === "primary" ? "hover:bg-green-900" : "hover:bg-slate-800"
			} shadow-sm text-white rounded-md transition-all ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
