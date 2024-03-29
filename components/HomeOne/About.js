import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about1.jpg"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                />
                <img
                  src="/images/about/about2.jpg"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <p>
                  Discover Crokta, your go-to digital growth software company!
                  We excel in elevating your business value with strategic
                  planning, customer development, and innovative growth
                  techniques. Let us transform your online presence and drive
                  success!
                </p>
                {/* <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't.
                </p> */}

                <Link href="/about" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default About;
