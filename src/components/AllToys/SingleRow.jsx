import { FaDollarSign, FaEnvelope, FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleRow = ({ toy, serial }) => {
	const { _id, toy_name, toy_image, seller_name, seller_email, sub_category, available_quantity, price, rating } = toy;
	return (
		<tr className='text-center h-12'>
			<td>{serial}</td>
			<td>
				<div className='avatar'>
					<div className='mask mask-squircle w-12 h-12'>
						<img src={toy_image} alt='Avatar Tailwind CSS Component' />
					</div>
				</div>
			</td>
			<td>
				<div className='font-bold'>{toy_name}</div>
				<div className='text-sm opacity-50'>{sub_category}</div>
			</td>

			<td>
				<div className='flex flex-col gap-3 justify-center items-center'>
					<span className='text-bold flex gap-2 justify-center items-center'>
						<FaUser /> {seller_name}
					</span>
					<span className='badge badge-ghost badge-sm p-3 flex gap-1 justify-center items-center'>
						<FaEnvelope /> {seller_email}
					</span>
				</div>
			</td>
			<td className='fle justify-center items-center'>
				<div className='flex gap-1 justify-center items-center'>
					<FaDollarSign /> {price}
				</div>
			</td>
			<td>{available_quantity}</td>
			<td>
				<div className='flex gap-2 justify-center items-center'>
					<FaStar /> {rating}
				</div>
			</td>
			<td>
				<Link to={`../toys/${_id}`} className='btn btn-sm'>
					view details
				</Link>
			</td>
		</tr>
	);
};

export default SingleRow;
