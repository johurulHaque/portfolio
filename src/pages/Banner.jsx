import Lottie from "lottie-react";
import { FaDownload } from "react-icons/fa";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import codingAnimation from "../assets/lottieAnimate.json";
const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Deginer', 'React Developer', 'MERN Stack Developer'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-9 md:px-5 ">
            <div className="flex justify-center items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl">
                        I'm a {" "} 
                        <span  className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">{text}</span>
                        <span><Cursor cursorStyle="|" cursorColor='yellow' /></span>
                    </h2>                  
                    <p className="text-xl">I am working with MERN Stack about 1+ years of experience. I am a skilled React developer with expertise in developing dynamic and responsive user interfaces, can adapt to new technology within a short time.</p><br />
                    <button className='py-3 px-6 rounded  bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'><a href="./johurul-resume.pdf" download className="flex gap-2"><FaDownload></FaDownload> Download Resume</a></button>                    
                </div>
            </div>
            <div>
                <Lottie animationData={codingAnimation} loop={true} className="md:h-5/6 " />
            </div>
        </div>
    )
}

export default Banner;