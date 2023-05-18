import { Link } from 'react-router-dom';
import google from '../../../src/assets/google.png';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Registration = () => {
	const { name } = useContext(AuthContext);
	
	return (
		<div className='min-h-[85vh] flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-extrabold uppercase mb-4 text-gray-800'>Register</h1>

			<form className='max-w-xl flex flex-col gap-3 w-full'>
				<input type='text' placeholder=' Name...' className='input w-full input-bordered block' />
				<input type='text' placeholder=' Photo URL...' className='input w-full input-bordered ' />
				<input type='email' placeholder=' Email...' className='input w-full input-bordered ' />
				<input type='text' placeholder='Password...' className='input w-full input-bordered ' />
				<input
					type='submit'
					value='Register'
					className='btn input w-full input-bordered bg-[#48b4ad] font-semibold text-white border-0'
				/>

				<div className='flex flex-col w-full lg:flex-row'>
					<div className='grid flex-grow h-12 card bg-base-300 rounded-box place-items-center'>
						<p className='text-sm'>
							Already Have An account?{' '}
							<Link to='/login' className='text-[#3d948f]'>
								Login
							</Link>
						</p>
					</div>
					<div className='divider lg:divider-horizontal'>OR</div>
					<div className='grid flex-grow h-12 card bg-base-300 rounded-box place-items-center'>
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
