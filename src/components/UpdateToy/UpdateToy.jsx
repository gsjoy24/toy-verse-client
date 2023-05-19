import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
	const { _id, toy_name, toy_image, price, rating, sub_category, available_quantity, detail_description } =
		useLoaderData();
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

		Swal.fire({
			title: 'Do you really want to update?',
			text: "You won't be able to revert this!",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#48b4ad',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://toy-verse-server-iota.vercel.app/toys/toys/${_id}`, {
					method: 'PATCH',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(toy)
				})
					.then((res) => res.json())
					.then((result) => {
						// if()
					})
					.catch((err) => setErr(err));
			}
		});
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
					defaultValue={toy_name}
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
					defaultValue={toy_image}
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
					defaultValue={user?.displayName}
					disabled
				/>

				{/* seller email */}
				<label className='label p-0 ml-2'>
					<span className='label-text text-xs'>Toy Email :</span>
				</label>
				<input
					type='email'
					name='seller_email'
					defaultValue={user?.email}
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
							<option disabled defaultValue='default'>
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
							defaultValue={available_quantity}
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
							defaultValue={price}
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
							defaultValue={rating}
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
					defaultValue={detail_description}
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
