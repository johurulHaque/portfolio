import Lottie from "lottie-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import developer from '../assets/developer.json';
const AboutPage = ()=>{
    return(
        <div id="about" className="px-9 md:px-5" >
            <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-dotted w-32 md:w-40 border-teal-600 uppercase text-teal-600">About Me</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5" >
                <div className="w-full md:w-1/2">
                <Lottie animationData={developer} loop={true} className="md:w-4/6" />
                </div>
                <div  className="w-full md:w-1/2 text-xl md:text-2xl">
                    <FaQuoteLeft className="text-teal-600"></FaQuoteLeft>
                    <p className="px-5 md:px-0 ml-5">
                    I'm Md Johurul Haque, and I'm a passionate React developer. I thrive on creating innovative and user-friendly web applications that bring ideas to life. With a strong foundation in front-end development and a deep understanding of React, I love tackling complex problems and turning them into elegant solutions.
                    </p>
                    <FaQuoteRight className="text-teal-600"></FaQuoteRight>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;