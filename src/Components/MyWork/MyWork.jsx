import './MyWork.css'
import Mywork_Data from './Mywork_data.js'
import { BsArrowRight } from "react-icons/bs";

const MyWork = () => {
  return (
    <div id='work' className='my-work'>
        <div className="mywork-title">
            <h1 className="title"> My Works</h1>
        </div>
        <div className="mywork-container">
            {Mywork_Data.map((works,index) => {
                return <div key={index} className="myworks-format"> 
                    <img src={works.w_img} alt=""/>
                </div>
            } )}
        </div>
        <div className="mywork-showmore">
            <p> Show More </p>
            <BsArrowRight />
        </div>
    </div>
  )
}

export default MyWork;
