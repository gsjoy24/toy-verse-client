import { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [sort, setSort] = useState('');
	const [toys, setToys] = useState([]);
	const [reload, setReload] = useState(true);
	const url = sort
		? `http://localhost:5000/toys/${user.email}/sort?type=${sort}`
		: `http://localhost:5000/toys?seller_email=${user.email}`;

	console.log(sort);
	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#48b4ad',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/toys/${id}`, {
					method: 'DELETE'
				})
					.then((res) => res.json())
					.then((result) => {
						if (result.deletedCount > 0) {
							setReload(!reload);
							Swal.fire({
								icon: 'success',
								title: 'Deleted successfully!',
								text: 'This toy has been successfully removed!',
								showConfirmButton: false,
								timer: 2000
							});
						} else {
							Swal.fire({
								icon: 'error',
								title: 'failed to delete!',
								text: 'Something went wrong! Please try again!',
								showConfirmButton: false,
								timer: 3000
							});
						}
					})
					.catch((err) => console.log(err));
			}
		});
	};

	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		fetch(url)
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, [reload, user, url, sort]);

	const tableHeadings = (
		<tr className='text-center'>
			<th>serial</th>
			<th>Image</th>
			<th>Name & category</th>
			<th>price</th>
			<th>rating</th>
			<th>
				available <br /> quantity
			</th>
			<th>action</th>
		</tr>
	);

	return (
		<div className='max-w-5xl mx-auto mb-12'>
			<h1 className='text-2xl md:text-4xl font-extrabold my-14 text-center uppercase'>All toys added by you</h1>
			<div className='flex justify-end mb-4'>
				<select onChange={(e) => setSort(e.target.value)} className='select select-bordered w-full max-w-[200px]'>
					<option disabled selected>
						Sort By Price
					</option>
					<option value='ascending'>Ascending</option>
					<option value='descending'>Descending</option>
				</select>
			</div>
			<div className='overflow-x-auto w-full'>
				{toys.length ? (
					<table className='table w-full'>
						{/* head */}
						<thead>{tableHeadings}</thead>
						<tbody>
							{toys.map((toy, serial) => (
								<ToyRow key={toy._id} toy={toy} serial={serial + 1} handleDelete={handleDelete} />
							))}
						</tbody>
						{/* foot */}
						<tfoot>{tableHeadings}</tfoot>
					</table>
				) : (
					<h1 className='my-40 text-center text-3xl font-bold'>No data found!</h1>
				)}
			</div>
		</div>
	);
};

export default MyToys;
