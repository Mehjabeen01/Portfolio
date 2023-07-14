import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";


const Portfolio = () => {

    return (
        <Fade>

        <div>
            <h2 className="text-3xl font-semibold text-center mt-12">Projects</h2>
             <Tabs>
        <TabList>
          <Tab><h1 className="font-semibold">Dragon Cuisine</h1></Tab>
          <Tab><h1 className="font-semibold">Pets For Life</h1></Tab>
          <Tab><h1 className="font-semibold">Musical Summer</h1></Tab>
        </TabList>
    
        <TabPanel>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co/kM7Lqpt/Dragon-Cuisine-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/p4PNL9G/Dragon-Cuisine-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/JRR9TyX/Dragon-Cuisine-3.jpg" alt="" /></SwiperSlide>
      </Swiper>
      <div className="flex justify-between items-center">
      <div className="m-12">
      <h2 className="text-2xl">Main Features of Dragon Cuisine:</h2>
      <ul>
        <li>
        An interactive and visually appealing interface for users
        </li>
        <li>
        Website is responsive and optimized for different devices and screen sizes
        </li>
        <li>
        Interactive components such as forms and search functionality
        </li>
      </ul>
      </div>
      <button className="btn btn-neutral"><a href="https://complex-firebase.web.app/" target="_blank" rel="noopener noreferrer">
        Visit Live Site
      </a></button>
      <div>

      </div>
      </div>
        </TabPanel>
        <TabPanel>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co/xM7x87q/Pets-for-life-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SK6BbZW/Pets-for-life-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/StT8cBd/Pets-for-life-3.jpg" alt="" /></SwiperSlide>
      </Swiper>
      <div className="flex justify-between items-center">
      <div className="m-12">
      <h2 className="text-2xl">Main Features of Pets For Life:</h2>
      <ul>
        <li>
        SEO optimization through metatags and URL structure improvement
        </li>
        <li>
        Shopping cart functionality
        </li>
        <li>
        Implementation of system for users to provide feedback to enhance user engagement
        </li>
      </ul>
      </div>
      <button className="btn btn-neutral"><a href="https://toy-marketplace-67c27.web.app/" target="_blank" rel="noopener noreferrer">
        Visit Live Site
      </a></button>
      <div>

      </div>
      </div>
        </TabPanel>
        <TabPanel>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co/N9jVKCj/Musical-Summer-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/y8xcWYS/Musical-Summer-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/dByd3rc/Musical-Summer-3.jpg" alt="" /></SwiperSlide>
      </Swiper>
      <div className="flex justify-between items-center">
      <div className="m-12">
      <h2 className="text-2xl">Main Features of Musical Summer:</h2>
      <ul>
        <li>
        User authentication
        </li>
        <li>
        Payment Integration, a secure payment gateway with stripe
        </li>
        <li>
        Security measures taken such as safeguarding user data and data encryption using JWT
        </li>
      </ul>
      </div>
      <button className="btn btn-neutral"><a href="https://summer-camp-a83d0.web.app/" target="_blank" rel="noopener noreferrer">
        Visit Live Site
      </a></button>
      <div>

      </div>
      </div>
        </TabPanel>
      </Tabs>
        </div>
        </Fade>
    );
};

export default Portfolio;