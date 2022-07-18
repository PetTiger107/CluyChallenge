import Header from "../../components/Header";
import Login from "../../components/Login";

export const LoginView = () => {
	return (
		<>
		<Header
			heading="Login to your account"
			paragraph="Don't have an account yet? "
			linkName="Signup"
			linkUrl="/signup"
			/>
		<Login />
		</>
	)
};
