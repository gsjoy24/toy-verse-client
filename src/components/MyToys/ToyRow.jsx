import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, serial, handleDelete }) => {
	const { _id, toy_name, toy_image, sub_category, price, rating, available_quantity } = toy;

	return (
		<tr className='text-center'>
			<th>
				<label>{serial}</label>
			</th>

			<td>
				<div className='avatar'>
					<div className='mask mask-squircle w-12 h-12'>
						<img src={toy_image} alt={toy_name} />
					</div>
				</div>
			</td>
			<td>
				<div>
					<div className='font-bold'>{toy_name}</div>
					<div className='text-sm opacity-50'>{sub_category}</div>
				</div>
			</td>

			<td>$ {price}</td>

			<td>{rating}</td>
			<td>{available_quantity}</td>

			<th className='flex flex-col gap-3'>
				<Link className='btn bg-[#48b4ad] border-0 btn-xs' to={`/update/${_id}`}>
					Update
				</Link>
				<button onClick={() => handleDelete(_id)} className='btn bg-[#48b4ad] border-0 btn-xs'>
					<FaTrash />
				</button>
			</th>
		</tr>
	);
};

export default ToyRow;
