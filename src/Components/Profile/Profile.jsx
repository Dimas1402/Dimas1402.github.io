import React from 'react'
import './profile.scss'
import Data from './Data.json'
import Portofolio from "../Portofolio/Portofolio"
import Contact from '../Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarTwo from '../Navbar/Navbar2'
// ..
AOS.init();

const Profile = () => {
  return (
    <>
      <NavbarTwo/>
      <div id="profile" className='jumbotron jumbotron-fluid jumbotron-profile'>
        <div className='container'></div>
      </div>
      <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='container container-profile'>
        <div  className='col-md-12 profile-content'>
          <div className='row text-center'>
            <div className='container box-profile'>
              <div className='row'>
                <div className='col-md-12 box-content-profile   '>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img
                        className='ml-1 mt-5 mb-5 img-fluid'
                        style={{ height: '50vmin', width: '40vmin' ,backgroundSize:"cover"}}
                        src={require("../../Assets/foto.jpg")}
                        alt=''
                      />
                    </div>
                    <div className='col-md-8 text-left'>
                      <div className='chat-container'>
                        <div className='chat-sender msg'>
                          <strong>HELLO</strong>
                        </div>
                      </div>
                      <div
                        style={{ border: 'none' }}
                        className='card mt-4 card-name-user'
                      >
                        <p>
                          <span>I'm</span> Dimas Anugerah Pratama
                        </p>
                        <p id='job'>Frontend Developer</p>{' '}
                        <span id='border'></span>
                      </div>
                      <ul className='list-group list-group-flush list-data-profile mt-3'>
                        {Data.DataUser.map(res => (
                          <>
                            <li key={res.id} className='list-group-item'>
                              <strong>{res.name}</strong>
                              <span className={res.class}></span>
                              <span>{res.isi}</span>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 icon box-icon'>
                  {Data.Icon.map(res => (
                    <i key={res.id} className={res.nameIcon}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1jaRT4DHvZDXUOIFRSru6ZyyN4bH3DAUD/view?usp=sharing" >
        <button  id="skill" className='btn-cv mt-5'>DOWNLOAD CV</button>
        </a>
        <p  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Skills</p>
        <div className='d-flex justify-content-center mt-5 mb-5 image'>
          {Data.IconSkill.map(res => (
            <img data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className=' image-name' src={res.img} alt='' />
          ))}
        </div>
        <div  className='card p-5 card-skill'>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='row skill'>
            <div className='col-md-6 text-left '>
              <p className='skill-name mt-2'>Javascript</p>
              <div id='ProgressBar'>
                <div id='Progress1'></div>
              </div>
              <p className='skill-name mt-2'>React Js</p>
              <div id='ProgressBar'>
                <div id='Progress2'></div>
              </div>
              <p className='skill-name mt-2'>React Native</p>
              <div id='ProgressBar'>  
                <div id='Progress9'></div>
              </div>
              <p className='skill-name mt-2'>Redux</p>
              <div id='ProgressBar'>
                <div id='Progress3'></div>
              </div>
              <p className='skill-name mt-2'>Git</p>
              <div id='ProgressBar'>
                <div id='Progress7'></div>
              </div>
            </div>
            <div className='col-md-6 text-left'>
              <p className='skill-name mt-2'>HTML</p>
              <div id='ProgressBar'>
                <div id='Progress4'></div>
              </div>
              <p className='skill-name mt-2'>CSS</p>
              <div id='ProgressBar'>
                <div id='Progress5'></div>
              </div>

              <p className='skill-name mt-2'>Bootstrap</p>
              <div id='ProgressBar'>
                <div id='Progress6'></div>
              </div>
              <p className='skill-name mt-2'>SASS</p>
              <div id='ProgressBar'>
                <div id='Progress8'></div>
              </div>
              <p className='skill-name mt-2'>Material UI</p>
              <div id='ProgressBar'>
                <div id='Progress8'></div>
              </div>
            </div>
          </div>
        </div>
        <p id="work" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className=' mt-5 title-name'>Work Experience</p>
        <div className='work'>
          <section data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='steps steps-area'>
            <div className='container'>
              <ul className='timeline'>
                <li className='timeline-box wow fadeInLeft'>
                  <i className='icon-layers' />
                  <p style={{ fontSize: '20px' }} className='timeline-title'>
                    Supercamp Programmer
                  </p>
                  <p className='timeline-details'>
                    Create a programmer supercamp website
                  </p>
                  <span>2</span>
                </li>
                <li className='timeline-box wow fadeInRight'>
                  <i className='icon-chat' />
                  <p style={{ fontSize: '20px' }} className='timeline-title'>
                    IT Division at Pondok Programmer
                  </p>
                  <p className='timeline-details'>
                    Create Pondok Programmer Website and make a system on Pondok
                    Programmer website
                  </p>
                  <span id="education">1</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <p  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Education</p>
        <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='row card-education'>
          <div className='col-md-6'>
            <div  className='card p-4 m-2'>
              <p className='tahun'>2016 - 2019</p>
              <p className='keterangan'>
                learn computer and network techniques
              </p>
              <p style={{ fontSize: '20px' }}>SMKN 4 Bekasi</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card p-4 m-2'>
              <p className='tahun'>2019 - Now</p>
              <p className='keterangan'>
                learn javascript programming language then learn react js and
                become an IT division
              </p>
              <p style={{ fontSize: '20px' }}>Pondok Programmer</p>
            </div>
          </div>
        </div>
        <p id="projek" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>My Projects</p>
       <Portofolio/>
       <p id="contact" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Contact Me</p>
      <Contact/>
      <p style={{color:'#838181'}} className="mt-5">Dimas Anugerah P @2020</p>
      </div>
    </>
  )
}

export default Profile
