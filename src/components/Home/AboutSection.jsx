import aboutImg from '../../../src/assets/about.jpg';

const AboutSection = () => {
	return (
		<div className='hero min-h-screen w-full bg-[#e5fdfb] mb-12 py-12'>
			<div className='hero-content flex-col lg:flex-row gap-12'>
				<img src={aboutImg} className='max-w-sm w-full rounded-lg shadow-2xl' />
				<div className='max-w-md'>
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
