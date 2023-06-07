import BootCampCard from '../components/BootCamp/BootCampCard';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

const Index = () => {
  const bootcamp = {
    title: 'Machine Learning Bootcamp',
    description: 'Learn Machine Learning from scratch',
    image: 'https://i.imgur.com/6YVqBbQ.png',
    instructor: 'Dr. Ryan Ahmed, Ph.D., MBA',
    category: 'Data Science',
    level: 'Beginner',
    price: 49.99,
    rating: 4.5,
    reviews: 12,
    link: 'https://www.udemy.com/course/machine-learning-bootcamp/',
  };
  return (
    <div div className='container'>
      {/* <Navbar /> */}
      <BootCampCard bootcamp={bootcamp} />
      <Footer />
    </div>
  );
};

export default Index;
