import { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [toys, setToys] = useState([]);
	const [reload, setReload] = useState(true);

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://toy-verse-server-iota.vercel.app/toys/${id}`, {
					method: 'DELETE'
				})
					.then((res) => res.json())
					.then((result) => {
						if (result.deletedCount > 0) {
							setReload(!reload);
							Swal.fire({
								icon: 'success',
								title: 'Deleted successfully!',
								text: 'This toy is successfully removed!',
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
		fetch(`https://toy-verse-server-iota.vercel.app/toys?seller_email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, [reload, user]);

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
			<div className='overflow-x-auto w-full'>
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
			</div>
		</div>
	);
};

export default MyToys;
