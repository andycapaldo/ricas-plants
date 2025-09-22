import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <FormContainer>
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonLabel="create an account"
        />
        <Link to='/' className='text-green-600 underline text-sm'>sign in</Link>
    </FormContainer>
  );
};

export default SignUpPage;
