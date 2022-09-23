import { Spinner } from 'reactstrap';
import './Loading.scss';
function Loading() {
  return (
    <div className="overlay">
      <div className="overlay__content">
        <Spinner color="light">Loading...</Spinner>
      </div>
    </div>
  );
}

export default Loading;
