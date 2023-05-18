import ToyCard from './ToyCard';

const ToyTab = ({ toys }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
			{toys.map((toy) => (
				<ToyCard key={toy._id} toy={toy} />
			))}
		</div>
	);
};

export default ToyTab;
