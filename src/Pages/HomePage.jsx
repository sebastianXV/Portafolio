import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Components/Header';
import BodyHome from '../Components/Body/BodyHome';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <BodyHome />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
