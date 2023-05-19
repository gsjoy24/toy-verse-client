import { Link } from 'react-router-dom';
import errImg from '../../../src/assets/not-found.svg';

const ErrorPage = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-5 bg-slate-100 h-[100vh]'>
			<p className='text-2xl md:text-4xl font-bold'>Uffs! Page Not Found!</p>
			<img className='max-w-md w-full' src={errImg} alt='not found' />
			<Link to='/' className='btn bg-[#48b4ad] border-0'>
				back to home
			</Link>
		</div>
	);
};

export default ErrorPage;
