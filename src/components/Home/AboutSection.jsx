import aboutImg from '../../../src/assets/about.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutSection = () => {
	useEffect(() => {
		Aos.init({});
	}, []);
	return (
		<div className='hero min-h-screen w-full bg-[#e5fdfb] mb-12 py-12'>
			<div className='hero-content flex-col lg:flex-row gap-12'>
				<img data-aos='fade-right' src={aboutImg} className='max-w-sm w-full rounded-lg shadow-2xl' />
				<div data-aos='fade-left' className='max-w-md'>
					<h1 className='text-5xl font-bold'>We provide & offer premium service!</h1>
					<p className='py-6'>
						Our area of practice is quite wide: toy production, custom-made toys for every age, toy brand promotion,
						playrooms design with equipment, and of course kids camps and events!
					</p>
					<p>Contact us today and get a free consultation on any product we offer. Join our community for updates.</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
