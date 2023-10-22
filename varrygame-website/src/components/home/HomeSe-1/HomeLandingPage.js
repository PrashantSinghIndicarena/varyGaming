import React, { useState } from 'react';
import './HomeLandingPage.css';
import image from './Screenshot (2).png';

export default function HomeLandingPage() {
  const [title, setTitle] = useState("WELCOME TO VARY GAMING: WHERE PASSION MEETS PLAY.");
  const [description, setDescription] = useState("Dive into a universe of unparalleled gaming experiences. From the latest trends to timeless classics, Vary Gaming is your ultimate destination for all things gaming. Level up with us!");
  const [buttonLabel, setButtonLabel] = useState("Click Me");
  const [imageUrl, setImageUrl] = useState(image);

  return (
    <div className='home-landing-hero'>
      <div className='home-landing-hero-left'> 
        <h>{title}</h>
        <p>{description}</p>
        <button>
          {buttonLabel}
        </button>
      </div>
      <div className='home-landing-hero-right'> 
        <img src={imageUrl} alt='Right Image' />
      </div>
    </div>
  );
}






// import React from 'react';
// import './HomeLandingPage.css';

// export default function HomeLandingPage() {
//   return (
//     <div className='home-landing-hero'>
//         <div className='home-landing-hero-left'> 
//           <h>WELCOME TO VARY GAMING : WHERE PASSION MEETS PLAY.</h>
//           <p>Dive into a universe of unparalleled gaming experiences.From the latest trends to timeless classics, Vary Gaming is your ultimate destination for all things gaming.Level up with us!</p>
//           <button>
//              {/* <img src={} alt = '/' /> */}
//              button
//           </button>
//         </div>
//         <div className='home-landing-hero-right'> 
//           {/* <img src={} alt = '/' /> */}
//           right Image
//         </div>
//     </div>
//   )
// }
