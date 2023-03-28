import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Services from '../components/HomeOne/Services';
import Webinar from '../components/HomeOne/Webinar';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layouts/Footer';
import ConsultUsForm from '../components/Common/ConsultUsForm';

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Services />

      <Webinar />

      <PartnerContent />

      <FeedbackSlider />

      <BlogPost />

      <ConsultUsForm />

      <Footer />
    </>
  );
};

export default Index;
