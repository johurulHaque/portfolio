import { FaGithub, FaLink } from 'react-icons/fa';
import { HiArrowNarrowRight } from "react-icons/hi";
import './Projects.css';
const Projects = () => {

    return (
        <div id='portfolio' className="px-9 md:px-5">
            <h1 className="text-2xl md:text-3xl w-40 md:w-52 font-bold border-b-2 border-dotted  border-teal-600 uppercase text-teal-600">My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0 mt-5">
                <div className='flex items-end justify-center shadow-md shadow-gray-600 rounded-lg bg-top bg-cover h-96 hover:bg-bottom ease-in-out duration-[2s]' style={{ backgroundImage: 'url("./sport.png")' }}>
                    <div className='flex items-center justify-center gap-2 text-white'>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/summer-camp-client' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Client</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/summer-camp-server' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Server</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://sports-academy-655d4.web.app' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaLink></FaLink> Live</a>
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-yellow-400'>Key Feature:</h2>
                    <div className='text-xl'>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> On this site anyone can register as a normal user, the user can be promoted to instructor or admin by a default admin.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> Instructors can add classes that they take, and wait for admin observation, Admin can make the class approved, deny and also give feedback.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> A user can enroll in a class if a seat is available and can pay through Stripe. </p>
                    </div><br />
                    <h2 className='text-2xl font-semibold text-yellow-400'>Technology Use:</h2>
                    <p className='text-xl'>React Js, Node Js, MongoDB, Express Js, Tailwind, Daisy UI, Stripe, JWT, Swiper Slider, Tan Stack Query, etc</p>
                </div>



                <div className='flex items-end justify-center shadow-md shadow-gray-600 rounded-lg bg-top bg-cover h-96 hover:bg-bottom ease-in-out duration-[2s]' style={{ backgroundImage: 'url("./chef.png")' }}>
                    <div className='flex items-center justify-center gap-2 text-white'>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/chef-home' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Client</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/chef-home-server' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Server</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://chef-home-bb09f.web.app/' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaLink></FaLink> Live</a>
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-yellow-400'>Key Feature:</h2>
                    <div className='text-xl'>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> In this project implement a navigation bar with some functionality like home blog with signin button.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> Home page with with navigation , footer and banner section and also have six chef information.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> There is a error page , when someone mistake to right then error page shown.
                            A blog section with some sort of question. </p>
                    </div><br />
                    <h2 className='text-2xl font-semibold text-yellow-400'>Technology Use:</h2>
                    <p className='text-xl'>React Js, Node Js, MongoDB, Express Js, Bootstrap, Lottie animation, etc</p>
                </div>


                <div className='flex items-end justify-center shadow-md shadow-gray-600 rounded-lg bg-top bg-cover h-96 hover:bg-bottom ease-in-out duration-[2s]' style={{ backgroundImage: 'url("./toy.png")' }}>
                    <div className='flex items-center justify-center gap-2 text-white'>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/toy-marketplace-client' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Client</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://github.com/johurulHaque/toy-marketplace-server' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaGithub></FaGithub> Server</a>
                        </button>
                        <button className='w-1/3 py-1 px-1 rounded m-4 bg-gradient-to-r from-teal-300 to-teal-600 duration-200 hover:scale-105'>
                            <a href='https://toys-house-6b1e0.web.app' target='_blang' rel="noreferrer" className='flex items-center justify-center gap-2'><FaLink></FaLink> Live</a>
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-yellow-400'>Key Feature:</h2>
                    <div className='text-xl'>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight> On this site, a new seller can register here and can add their own toy for sale, and can delete their existing one.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight>Normal users only see the toy in this marketplace and can also visit the blog section on this site.
                        </p>
                        <p> <HiArrowNarrowRight className='inline'></HiArrowNarrowRight>Some route is in private where no other can enter without login. </p>
                    </div><br />
                    <h2 className='text-2xl font-semibold text-yellow-400'>Technology Use:</h2>
                    <p className='text-xl'>React Js, Node Js, MongoDB, Express Js, Tailwind, Lottie Animation, Swiper Slider, etc.</p>
                </div>

            </div>
        </div>
    )
}

export default Projects;