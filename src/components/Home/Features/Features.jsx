import { FaClock, FaFunnelDollar, FaUserTie } from 'react-icons/fa';
import { GiSupersonicBullet } from 'react-icons/gi';

const Features = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center py-16 bg-slate-100 gap-4'>
			<div>
				<div className='flex flex-col justify-center items-center max-w-[270px] text-center gap-2 p-4 mx-auto'>
					<FaClock className='text-5xl' />
					<h4 className='text-xl font-bold'>Fast Delivery</h4>
					<p>FInd tracking information an order details form your orders!</p>
				</div>
			</div>
			<div>
				<div className='flex flex-col justify-center items-center max-w-[250px] text-center gap-2 p-4 mx-auto'>
					<FaFunnelDollar className='text-5xl' />
					<h4 className='text-xl font-bold'>Save Money</h4>
					<p>Save $5 every year compared to the monthly plan by paying yearly!</p>
				</div>
			</div>
			<div>
				<div className='flex flex-col justify-center items-center max-w-[250px] text-center gap-2 p-4 mx-auto'>
					<GiSupersonicBullet className='text-5xl' />
					<h4 className='text-xl font-bold'>Fast Return</h4>
					<p>Money back, if the item didn't suit you!</p>
				</div>
			</div>
			<div>
				<div className='flex flex-col justify-center items-center max-w-[250px] text-center gap-2 p-4 mx-auto'>
					<FaUserTie className='text-5xl' />
					<h4 className='text-xl font-bold'>Online Support</h4>
					<p>Use our 24/7 customer hotline so you're not alone if you have a question!</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
