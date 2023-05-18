/* eslint-disable react/no-unescaped-entities */

import img1 from '../../../src/assets/1.png';
import img2 from '../../../src/assets/2.png';
import img3 from '../../../src/assets/3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Banner.css';

const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		autoplay: true,
		pauseOnHover: false,
		fade: true
	};
	return (
		<div className='banner bg-cover'>
			<Slider className='overflow-hidden py-12 bg-slate-10' {...settings}>
				{/* first slider */}
				<div>
					<div className='lg:flex justify-center items-center md:px-24'>
						<div>
							<img className='min-w-[300px] w-72 rounded-3xl mx-auto' src={img1} alt='' />
						</div>

						<div className='p-10 md:p-12 max-w-2xl mx-auto text-white'>
							<h1 className='text-3xl md:text-4xl font-extrabold mb-4 '>
								Discover Epic Character Action Figures at Our Toy Shop!
							</h1>
							<p>
								Experience the awe-inspiring world of Transformer character action figures at our toy shop. Explore a
								vast collection of iconic characters like Optimus Prime and Bumblebee, ready to transform and embark on
								thrilling adventures. Unleash your imagination, create unforgettable memories, and be part of the
								Transformers phenomenon. Discover the magic today!
							</p>
						</div>
					</div>
				</div>
				{/* second slider */}
				<div>
					<div className='lg:flex justify-center items-center md:px-24'>
						<div>
							<img className='min-w-[300px] w-72 rounded-3xl mx-auto' src={img2} alt='' />
						</div>

						<div className='p-10 md:p-12 max-w-2xl mx-auto text-white'>
							<h1 className='text-3xl md:text-4xl font-extrabold  mb-4'>
								Explore our Avengers Action Figure Collection for Epic Marvel Adventures!
							</h1>
							<p>
								Unleash the power of Iron Man, Captain America, Thor, Hulk, and more as you recreate iconic battles,
								embark on thrilling adventures, and witness the mightiest heroes fight to save the universe. Whether
								you're a dedicated fan or a collector, our vast selection of Avengers action figures will ignite your
								imagination and transport you to a world of excitement and heroism.
							</p>
						</div>
					</div>
				</div>
				{/* third slider */}
				<div>
					<div className='lg:flex justify-center items-center md:px-24'>
						<div>
							<img className='min-w-[300px] w-72 rounded-3xl mx-auto' src={img3} alt='' />
						</div>

						<div className='p-10 md:p-12 max-w-2xl mx-auto text-white'>
							<h1 className='text-3xl md:text-4xl font-extrabold  mb-4'>
								Unleash the Power of DC: Immerse Yourself in the Vast DC Universe with our Action Figure Toys!
							</h1>
							<p>
								Step into the extraordinary world of Batman, Superman, Wonder Woman, The Flash, and more as you bring
								your favorite heroes and villains to life, recreate legendary showdowns, and experience the timeless
								tales of heroism and justice. From classic characters to modern icons, our extensive collection of DC
								action figures offers a gateway to endless adventures and allows you to create your own heroic stories.
							</p>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Banner;
