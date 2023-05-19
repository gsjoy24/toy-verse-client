import { useLoaderData } from 'react-router-dom';
import SingleRow from './SingleRow';
import { useEffect } from 'react';

const AllToys = () => {
	const toys = useLoaderData();

	useEffect(() => {
		fetch()
	},[])
	const tableHeadings = (
		<tr className='text-center'>
			<th>serial</th>
			<th>Image</th>
			<th>Name & category</th>
			<th>seller</th>
			<th>price</th>
			<th>
				available <br /> quantity
			</th>
			<th>rating</th>
		</tr>
	);
	return (
		<div className='overflow-x-auto'>
			<div className='py-8'>
				<h2 className='text-3xl font-bold uppercase text-center mt-5 '>Toys from all sellers</h2>
				<div className='flex justify-center items-center gap-1 mt-12 relative max-w-xl mx-auto border rounded-lg'>
					<input
						type='text'
						placeholder='Search here'
						className='input w-full'
					/>
					<button className="btn rounded-l-none absolute top-0 right-0 bg-[#48b4ad] border-0">search</button>
				</div>
			</div>
			<table className='table w-full max-w-5xl my-16 mx-auto'>
				{/* head */}
				<thead>{tableHeadings}</thead>
				<tbody>
					{toys.map((toy, serial) => (
						<SingleRow key={toy._id} toy={toy} serial={serial + 1} />
					))}
				</tbody>
				{/* foot */}
				<tfoot>{tableHeadings}</tfoot>
			</table>
		</div>
	);
};

export default AllToys;
