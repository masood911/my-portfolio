import React, { useEffect, useState } from 'react'
import Header from '../Includes/Header'
import gif1 from '../Includes/Images/fxVE.gif';
import reactIcon from '../Includes/Images/react-js-3d-icon.png';
import jsIcon from '../Includes/Images/javascript-3d-icon.png';
import bootstrapIcon from '../Includes/Images/bootstrap-3d-icon.png';
import htmlIcon from '../Includes/Images/html-3d-icon.png';
import cssIcon from '../Includes/Images/css-3d-icon.png';
import githubIcon from '../Includes/Images/github-3d-icon.png';
import './Home.css'
import Footer from '../Includes/Footer';
import CarouselComponent from '../Includes/CarouselComponent';

export default function Home() {
  const texts = ['Designer', 'Developer'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts]);


  return (
    <>
      <Header />
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Mr FREELANCER</h6>
                <h2 className="recent">
                  I AM AVAILABLE FOR <br/>
                  <span className="typing"
                    style={{
                      color: '#0583eb',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      lineHeight: 'inherit'
                    }}>
                    {texts[index].substring(0, subIndex)}
                  </span> 
                  <span className="cursor">| </span>
                  PROJECTS
                </h2>

                <p className="recent">As a seasoned developer, I craft dynamic and responsive websites with a focus on exceptional UI/UX design. My expertise in React and Bootstrap ensures engaging, intuitive user experiences. Explore my portfolio to see how I transform complex ideas into elegant digital solutions.</p>
                <div className="buttons">
                  <div className="border-button">
                    <a href="explore.html">Explore</a>
                  </div>
                  <div className="main-button">
                    <a href="https://youtube.com/templatemo" target="_blank" rel="noopener noreferrer">Watch Our Videos</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 image-container">
              <div className="item1">
                <img className="cropped-circle" src={gif1} alt="GIF 1" />
                <div className="icons-overlay">
                  <img src={jsIcon} alt="JavaScript" className="icons java-icon" />
                  <img src={reactIcon} alt="React" className="icons react-icon" />
                  <img src={bootstrapIcon} alt="Bootstrap" className="icons bootstrap-icon" />
                  <img src={htmlIcon} alt="HTML" className="icons html-icon" />
                  <img src={cssIcon} alt="CSS" className="icons css-icon" />
                  <img src={githubIcon} alt="GitHub" className="icons git-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="categories-collections">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h2 className="recent1">Browse Through Our <em>Categories</em> Here.</h2>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={reactIcon} alt="" />
                      </div>
                      <h4>React</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={jsIcon} alt="" />
                      </div>
                      <h4>javaScript</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={bootstrapIcon} alt="" />
                      </div>
                      <h4>Bootstrap</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={htmlIcon} alt="" />
                      </div>
                      <h4>Html</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={cssIcon} alt="" />
                      </div>
                      <h4>CSS</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src={githubIcon} alt="" />
                      </div>
                      <h4>Github</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="item-details-page">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-heading">
                      <div class="line-dec"></div>
                      <h2 className="recent1">View Details <em>For Item</em> Here.</h2>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="left-image">
                      <img src="assets/images/item-details-01.webp" alt="" style={{ borderRadius: "20px" }} />
                    </div>
                  </div>
                  <div class="col-lg-5 align-self-center">
                    <span class="author">
                      <img src="assets/images/author-02.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                      <h6>Mr FREELANCER<br /><a href="#">@Developer</a></h6>
                    </span>
                    <h2 className="recent">
                      I AM AVAILABLE FOR <span style={{ color: '#0583eb', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>REACT & UI UX DESIGN</span> PROJECTS
                    </h2>
                    <p className="recent">I offer professional services to bring your ideas to life. Whether you need a sleek, responsive website or an intuitive user interface, I have the skills and expertise to deliver high-quality results. Let's collaborate to create outstanding digital experiences that will engage and delight your users.</p>
                    <div className="row bid-info">
                      <div className="col-2 info-box">
                        <span className="bid">
                          Experiences<br /><strong>3+ years</strong>
                        </span>
                      </div>
                      <div className="col-2 info-box">
                        <span className="bid">
                          Developemnet Projects<br /><strong>50+</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="col-lg-12">
              <div className="collections">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h2 className="recent1">Recent Project <em>Development</em> Experiences.</h2>
                    </div>
                  </div>
                  <CarouselComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
