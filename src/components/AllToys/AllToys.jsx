import SingleRow from './SingleRow';
import { useEffect } from 'react';
import { useState } from 'react';

const AllToys = () => {
	const [toys, setToys] = useState([]);
	const [searchName, setSearchName] = useState('');
	console.log(searchName);

	const url = searchName
		? `http://toy-verse-server-iota.vercel.app/search_toys/${searchName}`
		: 'https://toy-verse-server-iota.vercel.app/toys';

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchName(e.target.name.value);
	};

	useEffect(() => {
		// scroll to top
		window.scrollTo(0, 0);
		document.title = 'All Toy | ToyVerse';

		fetch(url)
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, [url]);

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
			<th>action</th>
		</tr>
	);
	return (
		<div className='overflow-x-auto'>
			<div className='py-8'>
				<h2 className='text-3xl font-bold uppercase text-center mt-5 '>Toys from all sellers</h2>
				<form
					onSubmit={handleSearch}
					className='flex justify-center items-center gap-1 mt-12 relative max-w-xl mx-auto border rounded-lg'>
					<input
						type='text'
						onChange={(e) => setSearchName(e.target.value)}
						name='name'
						placeholder='Type here to search'
						className='input w-full'
					/>
					<button type='submit' className='btn rounded-l-none absolute top-0 right-0 bg-[#48b4ad] border-0'>
						search
					</button>
				</form>
			</div>

			{toys.length ? (
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
			) : (
				<h1 className='my-40 text-center text-3xl font-bold'>No data found!</h1>
			)}
		</div>
	);
};

export default AllToys;
