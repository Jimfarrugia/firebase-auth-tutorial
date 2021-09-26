import { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Signup = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();
	return (
		<>
			<Card style={{ padding: "1em" }}>
				<h2 className="text-center mb-4">Sign Up</h2>
				<Form>
					<Form.Group id="email" style={{ paddingBottom: "1em" }}>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" ref={emailRef} required />
					</Form.Group>
					<Form.Group id="password" style={{ paddingBottom: "1em" }}>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" ref={passwordRef} required />
					</Form.Group>
					<Form.Group id="password-confirm" style={{ paddingBottom: "1em" }}>
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							type="password"
							ref={passwordConfirmationRef}
							required
						/>
					</Form.Group>
					<Button className="w-100" type="submit">
						Sign Up
					</Button>
				</Form>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? Log In
			</div>
		</>
	);
};

export default Signup;
