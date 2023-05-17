import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	const navItems = (
		<>
			<li>
				<NavLink className={({ isActive }) => (isActive ? 'bg-[#48b4ad] text-white' : '')} to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/all-toys'>All Toys</NavLink>
			</li>
			<li>
				<NavLink to='/my-toys'>My Toys</NavLink>
			</li>
			<li>
				<NavLink to='/add-toy'>Add A Toy</NavLink>
			</li>
			<li>
				<NavLink to='/blogs'>Blogs</NavLink>
			</li>
		</>
	);
	return (
		<div className='navbar items-center px-6 md:px-24'>
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
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 gap-3 font-semibold'>{navItems}</ul>
			</div>
		</div>
	);
};

export default Navigation;
