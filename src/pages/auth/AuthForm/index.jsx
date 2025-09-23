import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="font-lato bg-white border border-slate-200 rounded-lg m-4 p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="relative bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-4 flex items-center h-full">
            <i className="fa-solid fa-spinner-third text-green-300 text-xl animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};
export default AuthForm;
