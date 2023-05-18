import { Link } from 'react-router-dom';
import { FaDollarSign, FaStar } from 'react-icons/fa';
const ToyCard = ({ toy }) => {
	return (
		<div>
			<div className='card max-w-[300px] bg-base-100 shadow-2xl mx-auto border mt-4'>
				<figure>
					<img className='h-44' src={toy.toy_image} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{toy.toy_name}</h2>
					<div className='flex'>
						<p className='flex items-center'>
							Price:
							<FaDollarSign />
							{toy.price}
						</p>
						<p className='flex items-center gap-2'>
							Rating: <FaStar /> {toy.rating}
						</p>
					</div>
					<div className='card-actions justify-end'>
						<Link to={`/toys/${toy._id}`} className='btn btn-sm btn-primary'>
							View Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyCard;
