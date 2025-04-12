import React from 'react';
 import { ToastContainer, toast } from 'react-toastify';
  

const Hero = () => {

     const notify = () => toast("Hello How Are You!");
     



     return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/src/assets/IMG_0738.jpeg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold flex-1/3">Dr.Hakim Prokash Halder.</h1>
      <p className="py-6">
        This is a Clinic of piles and many more dieases. We are here to help you with your problems. We have a team of experienced doctors and staff who are dedicated to providing the best care possible. Our goal is to make sure you feel comfortable and confident in your treatment.
      </p>
      <button onClick={notify} className="btn btn-primary">Get Started</button> <ToastContainer/>
    </div>
  </div>
</div>
        
     );
}

export default Hero;
