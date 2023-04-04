import Link from "next/link";
import {TbHeartHandshake} from "react-icons/tb";

const TestimonialsPage = () => {
  return (
    <>
      <section className="breadcrumb-area page-breadcrumb">
        <div className="container">
          <div className="about-title text-center">
            <h2 className="testimonial-title">Testimonials</h2>
          </div>
          <div className="border-box"></div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="about-title text-center">
            <div className="sub-title">
              <div className="inner text-center">
                <h3>We change You life and word</h3>
              </div>
            </div>
            <h2>Testimonials</h2>
          </div>
          <div className="row testimonial-cards">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-testimonial">
                <div className="text-holder">
                  <p>
                    Two major patterns for organizing code (data and behavior) 
                    are used broadly across the JS ecosystem: classes and 
                    modules. These patterns are not mutually exclusive; 
                    many programs can and do use both. Other programs 
                    will stick with just one pattern, or even neither!
                  </p>
                </div>
                <div className="client-info">
                  <div className="quote-icon">
                    <TbHeartHandshake />
                  </div>
                  <div className="client-name">
                    <h5>Founder of CEO</h5>
                    <span>Johm Doe</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-testimonial">
                <div className="text-holder">
                  <p>
                    Two major patterns for organizing code (data and behavior) 
                    are used broadly across the JS ecosystem: classes and 
                    modules. These patterns are not mutually exclusive; 
                    many programs can and do use both. Other programs 
                    will stick with just one pattern, or even neither!
                  </p>
                </div>
                <div className="client-info">
                  <div className="quote-icon">
                    <TbHeartHandshake />
                  </div>
                  <div className="client-name">
                    <h5>Founder of CEO</h5>
                    <span>Johm Doe</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-testimonial">
                <div className="text-holder">
                  <p>
                    Two major patterns for organizing code (data and behavior) 
                    are used broadly across the JS ecosystem: classes and 
                    modules. These patterns are not mutually exclusive; 
                    many programs can and do use both. Other programs 
                    will stick with just one pattern, or even neither!
                  </p>
                </div>
                <div className="client-info">
                  <div className="quote-icon">
                    <TbHeartHandshake />
                  </div>
                  <div className="client-name">
                    <h5>Founder of CEO</h5>
                    <span>Johm Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
