import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
	const { toy_name, toy_image, price, rating,sub_category, available_quantity, detail_description } = useLoaderData();
	const { user } = useContext(AuthContext);
	const [err, setErr] = useState('');

	const handleUpdate = (e) => {
		setErr('');
		e.preventDefault();
		const form = e.target;
		const toy_name = form.toy_name.value;
		const toy_image = form.toy_image.value;
		const sub_category = form.sub_category.value;
		const available_quantity = form.quantity.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const detail_description = form.detail_description.value;

		const toy = {
			toy_name,
			toy_image,
			sub_category,
			available_quantity,
			price,
			rating,
			detail_description
		};

		// validating sub category, rating and price
		if (sub_category === 'default') {
			setErr('please select a category!');
			return;
		} else if (rating > 5) {
			setErr(`rating can't be more than 5 stars!`);
			return;
		} else if (price <= 0) {
			setErr(`price amount must be greater than zero!`);
			return;
		}

		fetch('https://toy-verse-server-iota.vercel.app/toys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(toy)
		})
			.then((res) => res.json())
			.then((result) => console.log(result))
			.catch((err) => setErr(err));
	};
	return (
		<div className='min-h-[85vh] flex flex-col justify-center items-center p-5'>
			<h1 className='text-3xl font-extrabold uppercase mb-4 text-gray-800'>Update toy : {toy_name}</h1>
			<form onSubmit={handleUpdate} className='max-w-xl flex flex-col gap-3 w-full'>
				{/* toy name */}
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Toy Name :</span>
				</label>
				<input
					type='text'
					placeholder='Toy Name'
					value={toy_name}
					name='toy_name'
					className='input w-full input-bordered mb-4'
					required
				/>

				{/* image */}
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Toy Image :</span>
				</label>
				<input
					type='text'
					placeholder='Toy Image URL '
					name='toy_image'
					value={toy_image}
					className='input w-full input-bordered mb-4 '
					required
				/>

				{/* seller name */}
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Seller Name :</span>
				</label>
				<input
					type='text'
					name='seller_name'
					className='input w-full input-bordered mb-4 '
					value={user?.displayName}
					disabled
				/>

				{/* seller email */}
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Toy Email :</span>
				</label>
				<input
					type='email'
					name='seller_email'
					value={user?.email}
					className='input w-full input-bordered mb-4 '
					disabled
				/>

				{/* sub category and quantity */}
				<div className='grid grid-cols-2 gap-3'>
					<div className='w-full'>
						<label className='label p-0 ml-2 mb-2'>
							<span className='label-text text-xs'>Subcategory :</span>
						</label>
						<select name='sub_category' defaultValue={sub_category} className='select select-bordered w-full required'>
							<option disabled value='default'>
								Subcategory
							</option>
							<option value='Marvel_Universe'>Marvel Universe</option>
							<option value='DC_Universe'>DC Universe</option>
							<option value='Transformers'>Transformers</option>
						</select>
					</div>

					<div className='w-full'>
						<label className='label p-0 ml-2 mb-2'>
							<span className='label-text text-xs'>Quantity :</span>
						</label>
						<input
							type='number'
							placeholder='Available Quantity '
							name='quantity'
							value={available_quantity}
							className='input w-full input-bordered mb-4 '
							required
						/>
					</div>
				</div>

				{/* price and ratings */}
				<div className='flex gap-3'>
					<div className='w-full'>
						<label className='label p-0 ml-2 mb-2'>
							<span className='label-text text-xs'>Price :</span>
						</label>
						<input
							type='number'
							placeholder='$ Price'
							value={price}
							name='price'
							className='input w-full input-bordered mb-4 '
							required
						/>
					</div>

					<div className='w-full'>
						<label className='label p-0 ml-2 mb-2'>
							<span className='label-text text-xs'>Rating :</span>
						</label>
						<input
							type='number'
							placeholder='Ratings'
							value={rating}
							name='rating'
							className='input w-full input-bordered mb-4 '
							required
						/>
					</div>
				</div>
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Description :</span>
				</label>
				<textarea
					className='textarea textarea-bordered'
					name='detail_description'
					value={detail_description}
					placeholder='Description'
					required></textarea>

				<p className='text-red-600 text-xs'>{err}</p>
				<input
					type='submit'
					value='Update'
					className='btn input w-full input-bordered mb-4 bg-[#48b4ad] font-semibold text-white border-0'
				/>
			</form>
		</div>
	);
};

export default UpdateToy;
