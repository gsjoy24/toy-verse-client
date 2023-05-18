import { Link } from 'react-router-dom';
import google from '../../../src/assets/google.png';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useState } from 'react';

const Registration = () => {
	const { loginWithGoogle, createUser, setNameAndPhoto } = useContext(AuthContext);
	const [err, setErr] = useState('');

	const handleGoogleLogin = () => {
		setErr('');
		loginWithGoogle()
			.then((data) => console.log(data.user))
			.catch((err) => console.error(err.message));
	};

	const handelCreateUser = (e) => {
		setErr('');
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((data) => {
				setNameAndPhoto(name, photo)
					.then(() => {})
					.catch((err) => setErr(err.message));
				console.log(data.user);
			})
			.catch((err) => setErr(err.message));
	};

	return (
		<div className='min-h-[85vh] flex flex-col justify-center items-center p-5'>
			<h1 className='text-3xl font-extrabold uppercase mb-4 text-gray-800'>Register</h1>

			<form onSubmit={handelCreateUser} className='max-w-xl flex flex-col gap-3 w-full'>
				<input type='text' placeholder='Name...' name='name' className='input w-full input-bordered block' required />
				<input type='text' placeholder='Photo URL...' name='photo' className='input w-full input-bordered ' required />
				<input type='email' placeholder='Email...' name='email' className='input w-full input-bordered ' required />
				<input
					type='password'
					placeholder='Password...'
					name='password'
					className='input w-full input-bordered '
					required
				/>
				<p>{err}</p>
				<input
					type='submit'
					value='Register'
					className='btn input w-full input-bordered bg-[#48b4ad] font-semibold text-white border-0'
				/>

				<div className='flex flex-col w-full sm:flex-row'>
					<div className='grid flex-grow h-12 card bg-base-300 rounded-box place-items-center'>
						<p className='text-sm'>
							Already Have An account?{' '}
							<Link to='/login' className='text-[#3d948f]'>
								Login
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

export default Registration;
