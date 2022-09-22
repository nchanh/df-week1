import { Col, Row } from 'reactstrap';
import Images from '../../../assets/images';
import './Banner.scss';

const CLOTHES = [
  {
    id: 1,
    src: Images.CLOTHES_1,
  },
  {
    id: 2,
    src: Images.CLOTHES_2,
  },
  {
    id: 3,
    src: Images.CLOTHES_3,
  },
];

function Banner() {
  const element = CLOTHES.map((item) => {
    const classes = `banner__clothes__${item.id}`;
    const alt = `clothes ${item.id}`;

    return (
      <Col key={item.id} sm="12" md="4" lg="4" className={classes}>
        <img src={item.src} alt={alt} />
      </Col>
    );
  });

  return (
    <div className="banner">
      <img src={Images.BANNER_CLOTHES} alt="home-banner" />
      <Row className="banner__clothes mx-0">{element}</Row>
    </div>
  );
}

export default Banner;
