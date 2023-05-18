import img1 from '../../../src/assets/gallery/1.png';
import img2 from '../../../src/assets/gallery/2.png';
import img3 from '../../../src/assets/gallery/3.png';
import img4 from '../../../src/assets/gallery/4.png';
import img5 from '../../../src/assets/gallery/5.png';
import img6 from '../../../src/assets/gallery/6.png';
import img7 from '../../../src/assets/gallery/7.png';
import img8 from '../../../src/assets/gallery/8.png';
import img9 from '../../../src/assets/gallery/9.png';
const Gallery = () => {
	return (
		<div className='my-12'>
			<div className='text-center max-w-lg mx-auto px-5 mb-12'>
				<h2 className='font-bold text-4xl text-gray-800'>Sneak Peek</h2>
				<p className='text-gray-600 text-sm mt-3'>
					Get a Glimpse of our Upcoming Collection - Unleash Excitement with Exclusive Toy Previews!
				</p>
			</div>
			<div className='flex flex-wrap gap-6 justify-center items-center max-w-6xl px-8 mx-auto'>
				<img className='h-44 shadow-xl rounded-lg' src={img2} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img3} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img7} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img4} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img5} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img1} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img8} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img6} alt='' />
				<img className='h-44 shadow-xl rounded-lg' src={img9} alt='' />
			</div>
		</div>
	);
};

export default Gallery;
