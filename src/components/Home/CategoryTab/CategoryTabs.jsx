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
		<div className='max-w-5xl mx-auto'>
			<Tabs>
				<TabList>
					<Tab onClick={() => setCategory('Marvel_Universe')}>Marvel</Tab>
					<Tab onClick={() => setCategory('DC_Universe')}>DC Universe</Tab>
					<Tab onClick={() => setCategory('Transformers')}>Transformers</Tab>
				</TabList>

				<TabPanel>
					<ToyTab toys={toys} />
				</TabPanel>

				<TabPanel>
					<ToyTab toys={toys} />
				</TabPanel>

				<TabPanel>
					<ToyTab toys={toys} />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default CategoryTabs;
