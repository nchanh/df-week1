import Banner from '../../components/Homes/Banner';
import ProductRecommend from '../../components/Homes/ProductRecommend';

function Home({ className }) {
  return (
    <div className={className}>
      <Banner />
      <ProductRecommend />
    </div>
  );
}

export default Home;
