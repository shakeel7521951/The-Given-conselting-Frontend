import AboutImg from '../../assets/HomePageServices/AboutImg.png';

const About = () => {
  return (
    <section className='mt-20 px-6 lg:px-20 flex flex-col lg:flex-row gap-10'>
      <div className='lg:w-1/2'>
        <img src={AboutImg} alt='About Us' className='w-full h-[60%] sm:mt-20 object-cover rounded-lg shadow-lg' />
      </div>

      <main className='flex flex-col lg:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-judson text-center lg:text-left text-[#0A2281]'>
          About Us
        </h1>
        <p className='text-[#0A2281] text-xl md:text-2xl my-4 text-center lg:text-left'>
          A safe, comprehensive platform for all your needs.
        </p>

        <div className='text-lg leading-relaxed text-center lg:text-left'>
          <p className='mb-4'>
            Reflect your brand identity: Your slogan should align with your brand's values, mission, and unique selling proposition. Be memorable: Use catchy words, rhymes, or wordplay to make your slogan stand out in people's minds. Highlight benefits: Focus on the advantages and benefits customers can experience by choosing your import-export services.
          </p>
          <p>
            Reflect your brand identity: Your slogan should align with your brand's values, mission, and unique selling proposition. Be memorable: Use catchy words, rhymes, or wordplay to make your slogan stand out in people's minds. Highlight benefits: Focus on the advantages and benefits customers can experience by choosing your import-export services.
          </p>
        </div>

        <div className='mt-8'>
          <div className='relative w-full max-w-md mx-auto lg:mx-0'>
            <input
              type='email'
              placeholder='Contact Us'
              className='w-full py-3 pl-4 pr-32 border border-[#0A2281] rounded-md shadow-sm focus:ring-2 focus:ring-[#0A2281] focus:outline-none bg-transparent'
            />
            <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-[#0A2281] text-white px-4 py-2 rounded-md hover:bg-[#083d8a] transition'>
              Email
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
