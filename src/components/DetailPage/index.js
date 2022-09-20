import { Col, Row } from 'reactstrap';
import CategoryProducts from '../CategoryProducts';
import './DetailPage.scss';

const PRODUCT_DETAIL = {
  title: 'Relaxed Trouser',
  price: 3243000,
  currency: 'VND',
  colors: ['egg shell', 'smoke'],
  sizes: { small: 5, large: 3, extraLarge: 1 },
  describe:
    'The relaxed trouser is a sportswear update to the traditional cotton khaki with an encased elastic waistband and drawstrings. The piece features a rubberized Essentials label on the center front with side seam pockets and back welt pockets.',
  detail: `RELAXED FIT;68% COTTON / 32% POLYESTER;ENCASED ELASTIC WAISTBAND WITH DRAWSTRING;ESSENTIALS RUBBERIZED LABEL;SIDE SEAM POCKETS;BACK WELT POCKETS;IMPORTED;ESSENTIALS PRODUCTS ARE CURRENTLY NOT AVAILABLE FOR PURCHASE OR SHIPMENT TO EUROPE INCLUDING BELGIUM, LUXEMBOURG, AND THE NETHERLANDS.`,
  images: [
    {
      title: '1',
      url: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/258373078_186557513675072_6840180918594474193_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ltUcS-bddWAAX9t6mB0&tn=RldyEmmmDgDmP2yl&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-ZI0sdMD9VACeSNSJ7kIMAanXQ6WQxM68TM0NNdttVqQ&oe=632ED381',
    },
    {
      title: '2',
      url: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/258878768_187307383600085_5403593048944549124_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=EJbBSaDZUp8AX9QIgrn&tn=RldyEmmmDgDmP2yl&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9vBueqlWfokZOXKX6UO9M62mk6952G5cLFL6Lm9kdwsw&oe=632F4913',
    },
    {
      title: '3',
      url: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/259096111_190022296661927_6155411667687014566_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2QeafyBggk8AX-ZGCDk&_nc_oc=AQkTiGzzS9hA9cpTEeb20AJ3K2U_Bo-cvA8MAMO3vlqJ57TKLBHzmEciSSl5ZnM5k04&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Me4lsh6OpFOOLOTDsGOkI2J-c9JXJCjyllsSm9Ls8hQ&oe=632F61B1',
    },
  ],
  categoryId: 99,
  categoryName: 'ESSENTIALS MENS',
  brand: 'ESSENTIALS',
};

const PRODUCTS = [
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 1',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 2',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 3',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 4',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 5',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 6',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 7',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
  {
    id: 1,
    brand: 'ESSENTIALS',
    categoryId: 99,
    name: 'product 8',
    price: 3243000,
    currency: 'VND',
    image:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/259708311_190022346661922_7413813425656205520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7qhfLOG3AAwAX-mycVO&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rokDVh_YBtjm-cyOcilIqeyFCCXGpdSjnUV_PRGmaog&oe=632ED11A',
  },
];

function DetailPage() {
  const product = PRODUCT_DETAIL;
  const products = PRODUCTS;

  const renderProductDetail = (detail) => {
    const details = detail.split(';');

    return (
      <ul>
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="text-start">
      <Row className="detail">
        <Col sm="12" md="4" lg="4"></Col>
        <Col sm="12" md="4" lg="4">
          {product.images.map((item, i) => (
            <img key={i} src={item.url} alt={item.title} />
          ))}
        </Col>
        <Col sm="12" md="4" lg="4" className="detail__text text-start">
          <p>{product.categoryName}</p>
          <h3>{product.title}</h3>
          <p>
            {product.currency}
            {product.price}
          </p>
          <p>color/size</p>
          <button>ADD TO CART</button>
          <p>{product.describe}</p>
          <h6>Details:</h6>
          {renderProductDetail(product.detail)}
        </Col>
      </Row>

      <div className="px-5">
        <p>YOU MAY ALSO LIKE</p>
        <CategoryProducts products={products} />
      </div>
    </div>
  );
}

export default DetailPage;
