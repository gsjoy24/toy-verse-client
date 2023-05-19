import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navigation = () => {
	const { user, logOutUser } = useContext(AuthContext);
	// console.log(user);

	const navItems = (
		<>
			<li>
				<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/all_toys'>
					All Toys
				</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/my_toys'>
							My Toys
						</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/add_toy'>
							Add A Toy
						</NavLink>
					</li>
				</>
			)}
			<li>
				<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/blogs'>
					Blogs
				</NavLink>
			</li>

			{user ? (
				<>
					<li>
						<button onClick={logOutUser} className='active:bg-[#48b4ad]'>
							Logout
						</button>
					</li>
					<div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
						{' '}
						<img
							className='w-12 h-12 rounded-full shadow-md shadow-[#48b4ad]'
							src={user?.photoURL}
							alt={user?.displayName}
						/>
					</div>
				</>
			) : (
				<>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/register'>
							Register
						</NavLink>
					</li>

					<li>
						<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/login'>
							Login
						</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className='navbar items-center px-6 md:px-24 py-3 sticky bg-white top-0 right-0 z-50 w-full shadow-lg'>
			<div className='navbar-start justify-between items-center flex w-full'>
				<Link to='/' className='font-bold text-2xl lg:text-3xl text-[#48b4ad]'>
					ToyVerse
				</Link>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='black' viewBox='0 0 24 24' stroke='black'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-4 shadow rounded-box w-52 gap-4 bg-slate-50 font-semibold'>
						{navItems}
					</ul>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex text-sm'>
				<ul className='menu menu-horizontal px-1 gap-3 font-semibold'>{navItems}</ul>
			</div>
		</div>
	);
};

export default Navigation;
