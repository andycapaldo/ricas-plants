const Field = (props) => {
    const {label, type, value, onChange} = props;
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="px-2 py-1 bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600 w-64"
      />
    </div>
  );
};
export default Field;
