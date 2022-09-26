import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Images from '../../../assets/images';
import './Banner.scss';

const CLOTHES = [
  {
    id: 22,
    src: Images.CLOTHES_1,
  },
  {
    id: 23,
    src: Images.CLOTHES_2,
  },
  {
    id: 21,
    src: Images.CLOTHES_3,
  },
];

const IMAGES = [Images.BANNER, Images.BANNER_CLOTHES, Images.BANNER_TEAM];

function Banner() {
  const [image, setImage] = useState(Images.BANNER);

  useEffect(() => {
    let index = 0;
    const slideImage = setInterval(() => {
      setImage(IMAGES[index]);
      index++;
      index = index > 2 ? 0 : index;
    }, 5000);

    return () => {
      clearInterval(slideImage);
    };
  }, []);

  const element = CLOTHES.map((item, i) => {
    const classes = `banner__clothes__${i}`;
    const alt = `clothes ${item.id}`;

    const sizeDevice = i >= 2 ? 12 : 6;

    return (
      <Col
        key={item.id}
        sm={sizeDevice}
        md={sizeDevice}
        lg="4"
        className={classes}
      >
        <Link to={'/product/' + item.id}>
          <img src={item.src} alt={alt} />
        </Link>
      </Col>
    );
  });

  return (
    <div className="banner">
      <img className="banner__main" src={image} alt="home-banner" />
      <Row className="banner__clothes mx-0">{element}</Row>
    </div>
  );
}

export default Banner;
