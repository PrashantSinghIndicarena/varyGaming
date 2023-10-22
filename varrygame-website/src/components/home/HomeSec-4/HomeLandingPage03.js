import React from 'react';
import './HomeLandingPage03.css';
import portfolioImg from '././reactangle img01.jpg';

export default function HomeLandingPage03() {
    return (
        <div className='portfolio'>
            <h3>Portfolio</h3>
            <div className='slider'>
                <div className = 'slider-image-left'>
                    <div className = 'slider-image'>
                        <img src={portfolioImg} alt='Slider Image 1' />
                    </div>
                    <div className = 'slider-image'>
                        <img src={portfolioImg} alt='Slider Image 2' />
                    </div>
                    <div className = 'slider-image'>
                        <img src={portfolioImg} alt='Slider Image 3' />
                    </div>
                </div>
                <div className = "slider-image-right">
                    <div className = 'slider-image'>
                        <img src={portfolioImg} alt='Slider Image 4' />
                    </div>
                    <div className='slider-image'>
                        <img src={portfolioImg} alt='Slider Image 5' />
                    </div>
                    <div className='slider-image'>
                        <img src={portfolioImg} alt='Slider Image 6' />
                    </div>
                </div>
            </div>
        </div>
    );
}









// import React from 'react';
// import './HomeLandingPage03.css';
// import image01 from './reactangle img01.jpg';


// export default function HomeLandingPage03() {

//     const [imageUrl, setImageUrl] = useState(image);

//     return (
//         <div className='portfolio'>
//             <h3>Portfolio</h3>
//             <div className='slider-image-left'>
//                 <img src={image01} alt='Slider-img01' />
//                 <img src={image01} alt='Slider-img01' />
//                 <img src={image01} alt='Slider-img01' />
//             </div>
//             <div className='slider-image-right'>
//                 <img src={image01} alt='Slider-img01' />
//                 <img src={image01} alt='Slider-img01' />
//                 <img src={image01} alt='Slider-img01' />
//             </div>
//             <button>
//                 {/* <img src = {} alt='/' />  */}
//                 View More
//             </button>
//         </div>
//     )
// }
