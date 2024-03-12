const Button = ({ label, iconURL, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  bg-slate-500 rounded-full ${
        fullWidth && "w-full"
      } text-white border-slate-900`}
    >
      {label}
      <img
        src={iconURL}
        alt="arrow right"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
