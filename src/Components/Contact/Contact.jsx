import './Contact.css'
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d0289ab4-e669-4e25-b745-7ca1ba05dfd5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)

    }
  };

  return (
    <div id='contact' className='contact'>
       <div className="contact-title">
         <h1> Get in Touch </h1>
       </div>
       <div className="contact-section">
          <div className="contact-left">
             <h1> Lets Talk</h1>
             <p> Some Content </p>
             <div className="contact-details">
                <div className="contact-detail">
                 <IoMdMailUnread /> <p> aiswarya.anoop2015@gmail.com </p>
                </div>
                <div className="contact-detail">
                 <FaPhoneVolume /> <p>+971 525232764</p>
                </div>
                <div className="contact-detail">
                 <FaAddressBook /> <p> Al Wasl Building,Muhaisnah4,Dubai,UAE  </p>
                </div>
             </div>
          </div>
          <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'> </textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
          </form>
       </div>
    </div>
  )
}

export default Contact;
