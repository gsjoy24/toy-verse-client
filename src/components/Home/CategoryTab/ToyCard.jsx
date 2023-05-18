import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
	console.log(toy);
	return (
		<div>
			<div className='card max-w-[300px] bg-base-100 shadow-2xl mx-auto border '>
				<figure>
					<img className='h-44' src={toy.toy_image} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{toy.toy_name}</h2>
					<div className='flex'>
						<p>Price: ${toy.price}</p>
						<p>Rating: {toy.rating}</p>
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
