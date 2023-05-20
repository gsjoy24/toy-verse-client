import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect } from 'react';

const ToyDetail = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
	}, []);

	const {
		toy_name,
		toy_image,
		seller_name,
		seller_email,
		sub_category,
		available_quantity,
		price,
		rating,
		detail_description
	} = useLoaderData();

	const ratingStyles = {
		itemShapes: ThinStar,
		activeFillColor: '#ffb700',
		inactiveFillColor: '#fbf1a9'
	};

	return (
		<div className='hero min-h-screen bg-base-200 py-6'>
			<div className='hero-content flex-col lg:flex-row gap-12'>
				<img src={toy_image} className='max-w-sm w-full rounded-lg shadow-2xl lg:sticky top-[160px]' />

				<div className='max-w-xl'>
					<p className='text-xs text-gray-500 mb-2'>{sub_category}</p>
					<h1 className='text-3xl font-bold'>{toy_name}</h1>
					<span className='w-16 h-[2px] my-4 bg-gray-800 block relative'>
						<span className='block w-2 rounded-full h-2 bg-gray-800 left-0 -top-[3px] absolute'></span>
					</span>
					<p className='py-3 flex justify-start items-center font-bold'>
						<FaDollarSign /> <span className='text-xl -mt-1'>{price}</span>
					</p>
					<div className='flex gap-3'>
						<Rating style={{ maxWidth: 100 }} itemStyles={ratingStyles} value={rating} readOnly />{' '}
						<span className='font-bold'>{rating}</span>
					</div>
					<p className='font-semibold py-2'>Available: {available_quantity}</p>
					<div>
						<h4 className='font-bold ml-3'>Seller :</h4>
						<span className='w-16 h-[2px] my-2 bg-gray-800 block relative'>
							<span className='block w-2 rounded-full h-2 bg-gray-800 left-0 -top-[3px] absolute'></span>
						</span>
						<p>
							<span className='font-bold'>Name :</span> {seller_name}
						</p>
						<p>
							<span className='font-bold'>Email :</span> {seller_email}
						</p>
						<p className='font-bold mt-2'>Toy Description: </p>
						<p className='text-justify'>{detail_description}</p>
						<button className='btn bg-[#48b4ad] border-0 my-4 btn-block'>add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyDetail;
