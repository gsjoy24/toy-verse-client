import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
	const { user } = useContext(AuthContext);
	const [err, setErr] = useState('');

	useEffect(() => {
		// scroll to top of page andd set page title
		window.scrollTo(0, 0);
		document.title = 'Add Toy | ToyVerse';
	}, []);

	const handleAddToy = (e) => {
		setErr('');
		e.preventDefault();
		const form = e.target;
		const toy_name = form.toy_name.value;
		const toy_image = form.toy_image.value;
		const seller_name = user.displayName;
		const seller_email = user.email;
		const sub_category = form.sub_category.value;
		const available_quantity = form.quantity.value;
		const price = parseFloat(form.price.value);
		const rating = parseFloat(form.rating.value);
		const detail_description = form.detail_description.value;

		const toy = {
			toy_name,
			toy_image,
			seller_name,
			seller_email,
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
			.then((result) => {
				if (result?.acknowledged) {
					Swal.fire({
						icon: 'success',
						title: 'added successfully!',
						text: 'This toy has been successfully added!',
						showConfirmButton: false,
						timer: 2000
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: 'failed to add!',
						text: 'Something went wrong! Please try again!',
						showConfirmButton: false,
						timer: 3000
					});
				}
			})
			.catch((err) => setErr(err));
	};

	return (
		<div className='min-h-[85vh] flex flex-col justify-center items-center p-5'>
			<h1 className='text-3xl font-extrabold uppercase mb-4 text-gray-800'>Add a new toy</h1>
			<form onSubmit={handleAddToy} className='max-w-xl flex flex-col gap-3 w-full'>
				{/* toy name */}
				<input type='text' placeholder='Toy Name ' name='toy_name' className='input w-full input-bordered ' required />

				{/* image */}
				<input
					type='text'
					placeholder='Toy Image URL '
					name='toy_image'
					className='input w-full input-bordered '
					required
				/>

				{/* seller name */}
				<input
					type='text'
					name='seller_name'
					className='input w-full input-bordered '
					value={user.displayName}
					disabled
				/>

				{/* seller email */}
				<input type='email' name='seller_email' value={user.email} className='input w-full input-bordered ' disabled />

				{/* sub category and quantity */}
				<div className='grid grid-cols-2 gap-3'>
					<select name='sub_category' defaultValue={'default'} className='select select-bordered  required'>
						<option disabled value='default'>
							Subcategory
						</option>
						<option value='Marvel_Universe'>Marvel Universe</option>
						<option value='DC_Universe'>DC Universe</option>
						<option value='Transformers'>Transformers</option>
					</select>

					<input
						type='number'
						placeholder='Available Quantity '
						name='quantity'
						className='input w-full input-bordered '
						required
					/>
				</div>

				{/* price and ratings */}
				<div className='flex gap-3'>
					<input type='number' placeholder='$ Price ' name='price' className='input w-full input-bordered ' required />
					<input type='text' placeholder='Ratings ' name='rating' className='input w-full input-bordered ' required />
				</div>
				<textarea
					className='textarea textarea-bordered'
					name='detail_description'
					placeholder='Description'
					required></textarea>

				<p className='text-red-600 text-xs'>{err}</p>
				<input
					type='submit'
					value='Add Toy'
					className='btn input w-full input-bordered bg-[#48b4ad] font-semibold text-white border-0'
				/>
			</form>
		</div>
	);
};

export default AddAToy;
