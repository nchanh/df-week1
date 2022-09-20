import { useParams } from 'react-router-dom';
import DetailPage from '../../components/DetailPage';

function DetailProduct() {
  let { slug } = useParams();
  return <DetailPage slug={slug} />;
}

export default DetailProduct;
