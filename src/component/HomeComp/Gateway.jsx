import { FilledButton } from '../ButtonComponents/BorderButton';
import exploreImg from '../../assets/HomePageServices/Gateway.png';
import { Link } from 'react-router-dom';

const Gateway = () => (
  <section>
    <h1 className='max-w-xl mx-auto  font-judson text-3xl md:text-5xl text-center my-12 '>
      Pride in Prestigious Global Connections
    </h1>

    <main className='flex flex-col lg:flex-row'>
      <div className='bg-[#F3F4F6] gap-y-24 lg:gap-0 lg:w-3/4 flex items-center lg:items-baseline justify-between  flex-col my-12 py-4 px-6 rounded-s-3xl '>
        <h1 className='text-5xl font-normal mt-4'>
          "Your Gateway to International Markets"
        </h1>
        <p className='text-gray-600 leading-relaxed'>
           Reflect your brand identity: Your slogan should align with your
          brand's values, mission, and unique selling proposition.Be memorable:
          Use catchy words, rhymes, or wordplay to make your slogan stand out in
          people's minds.Highlight benefits: Focus on the advantages and
          benefits customers can experience by choosing your import export
          services.
        </p>

        <Link to="/international" className='w-max'>
          <FilledButton text={'Explore More '} />
        </Link>
      </div>
      <div className='w-[70vw] lg:w-auto mx-auto'>
        <img src={exploreImg} alt='' className='w-full' />
      </div>
    </main>
  </section>
);
export default Gateway;
