import './Services.css';
import Services_Data from './services_data.js'
import { BsArrowRight } from "react-icons/bs";


const Services = () => {
  return (
    <div id='service' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="service-container">
      {Services_Data.map((service,index) => {
            return <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="service-reaadmore"> 
                <p>Read More </p>
                <BsArrowRight />
            </div>
          </div>

      }      

    )
        }
      </div>
    </div>
  );
}

export default Services;