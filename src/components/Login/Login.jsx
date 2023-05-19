import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../src/assets/google.png';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useState } from 'react';
const Login = () => {
	const { loginWithGoogle, loginWithEmail } = useContext(AuthContext);
	const [err, setErr] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handelLogin = (e) => {
		setErr('');
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		loginWithEmail(email, password)
			.then(() => {
				form.reset();
				navigate(from);
			})
			.catch((err) => setErr(err.message));
	};

	const handleGoogleLogin = () => {
		setErr('');
		loginWithGoogle()
			.then(() => navigate(from))
			.catch((err) => setErr(err.message));
	};
	return (
		<div className='min-h-[85vh] flex flex-col justify-center items-center p-5'>
			<h1 className='text-3xl font-extrabold uppercase mb-4 text-gray-800'>Login Now</h1>

			<form onSubmit={handelLogin} className='max-w-xl flex flex-col gap-3 w-full'>
				<input type='email' placeholder='Email...' name='email' className='input w-full input-bordered ' required />
				<input
					type='password'
					placeholder='Password...'
					name='password'
					className='input w-full input-bordered '
					required
				/>

				<p className='text-red-600 text-xs'>{err}</p>
				<input
					type='submit'
					value='Login'
					className='btn input w-full input-bordered bg-[#48b4ad] font-semibold text-white border-0'
				/>

				<div className='flex flex-col w-full sm:flex-row'>
					<div className='grid flex-grow h-12 card bg-base-300 rounded-box place-items-center'>
						<p className='text-sm'>
							New Here?
							<Link to='/register' className='text-[#3d948f] ml-2'>
								Register
							</Link>
						</p>
					</div>
					<div className='divider lg:divider-horizontal'>OR</div>
					<div
						onClick={handleGoogleLogin}
						className='grid flex-grow h-12 card bg-base-300 rounded-box place-items-center'>
						<div className='flex justify-center items-center gap-3 text-sm w-full h-full'>
							Continue with
							<img className='w-5' src={google} alt='google' />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
