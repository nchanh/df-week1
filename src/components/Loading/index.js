import { Spinner } from 'reactstrap';
import './Loading.scss';
function Loading() {
  return (
    <div className="overlay">
      <div className="overlay__content">
        <Spinner color="dark" size="sm">
          Loading...
        </Spinner>
        <span>Wait a moment...</span>
      </div>
    </div>
  );
}

export default Loading;
