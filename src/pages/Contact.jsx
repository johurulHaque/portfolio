import Lottie from "lottie-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import contactAnimation from "../assets/contact.json";
const ContactPage = () => {
    return (
        <div id="contact" className="px-9 md:px-5 my-5">
            <h1 className="text-2xl md:text-3xl w-40 md:w-52 font-bold border-b-2 border-dotted  border-teal-600 uppercase text-teal-600">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div>
                    <Lottie animationData={contactAnimation} loop={true} className="md:h-4/6 w-full" />
                    {/* <p>
                        Phone: +880 1308 417 696
                    </p>
                    <p>
                        Email: johurulhaque.cse@gmail.com
                    </p> */}
                    <div className="flex justify-center gap-4">
                        <a href="https://www.linkedin.com/in/md-johurul-haque" target="_blank">
                            <FaLinkedin className="w-10 h-10 "></FaLinkedin>
                        </a>
                        <a href="https://web.facebook.com/JohurulHaque2" target="_blank">
                            <FaFacebook className="w-10 h-10 "></FaFacebook>
                        </a>
                        <a href="https://twitter.com/MDJOHURULH29152" target="_blank">
                            <FaTwitter className="w-10 h-10 "></FaTwitter>
                        </a>
                    </div>
                </div>
                <div className="mt-10 mx-auto w-3/4">
                    <form>
                        <input type="text" placeholder="Enter your name" className="input input-bordered input-warning w-full max-w-xs" /><br /><br />
                        <input type="Email" placeholder="Enter your email" className="input input-bordered input-warning w-full max-w-xs" /><br /><br />
                        <textarea className="textarea textarea-ghost  input-bordered input-warning w-full max-w-xs" placeholder="Enter subject" rows={6} /><br /><br />
                        <input type="submit" placeholder="Send Message" className="p-2 w-full md:w-2/3 hover:scale-105 bg-teal-600 rounded-md duration-200" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;