import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyTab from './ToyTab';

const CategoryTabs = () => {
	const [toys, setToys] = useState([]);
	const [category, setCategory] = useState('Marvel_Universe');

	useEffect(() => {
		setToys([]);
		fetch(`http://localhost:5000/toys/${category}`)
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, [category]);

	return (
		<div className='max-w-5xl mx-auto my-20 px-5'>
			<Tabs selectedTabClassName='bg-[#48b4ad] text-white rounded-t-lg'>
				<TabList>
					<Tab onClick={() => setCategory('Marvel_Universe')}>Marvel</Tab>
					<Tab onClick={() => setCategory('DC_Universe')}>DC Universe</Tab>
					<Tab onClick={() => setCategory('Transformers')}>Transformers</Tab>
				</TabList>

				<TabPanel>
					{toys.length > 0 ? (
						<ToyTab toys={toys} />
					) : (
						<div className='w-full min-h-[200px] flex justify-center items-center'>
							<button className='btn loading bg-[#48b4ad] border-0'>loading</button>
						</div>
					)}
				</TabPanel>
				<TabPanel>
					{toys.length > 0 ? (
						<ToyTab toys={toys} />
					) : (
						<div className='w-full min-h-[200px] flex justify-center items-center'>
							<button className='btn loading bg-[#48b4ad] border-0'>loading</button>
						</div>
					)}
				</TabPanel>
				<TabPanel>
					{toys.length > 0 ? (
						<ToyTab toys={toys} />
					) : (
						<div className='w-full min-h-[200px] flex justify-center items-center'>
							<button className='btn loading bg-[#48b4ad] border-0'>loading</button>
						</div>
					)}
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default CategoryTabs;
