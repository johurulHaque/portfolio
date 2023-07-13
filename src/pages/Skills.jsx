const Skills = ()=>{
    return(
        <div id="skill" className="px-9 md:px-5 mt-5" >
            <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-dotted w-32 md:w-40 border-teal-600 uppercase text-teal-600">My Skills</h1>

            {/* <Marquee speed={10} pauseOnHover={true}> */}
            <div className="w-full grid md:grid-cols-6 grid-cols-3 gap-8 text-center py-8  sm:px-0">
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-orange-500">
                <img src="./html.png" className="w-20" alt="" />
                <p>HTML5</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-blue-500">
                <img src="./css.png" className="w-20" alt="" />
                <p>CSS3</p> 
                </div>  
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-sky-400">
                <img src="./tailwind.png" className="w-20" alt="" />
                <p>Tailwind</p>
                </div>               
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-purple-500">
                <img src="./bootstrap.png" className="w-20" alt="" />
                <p>Bootstrap</p>
                </div>               
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-pink-500">
                <img src="./sass.png" className="w-20" alt="" />
                <p>Sass</p>
                </div>               
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-yellow-500">
                <img src="./javascript.png" className="w-20" alt="" />
                <p>JavaScript</p>
                </div>                
            {/* </div> */}
            {/* </Marquee> */}
            {/* <Marquee direction="right" speed={10} pauseOnHover={true}> */}
            {/* <div className="w-full grid sm:grid-cols-3 md:grid-cols-6  gap-8 text-center py-8 sm:px-0"> */}
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-blue-600">
                <img src="./react.svg" className="w-20" alt="" />
                <p>ReactJs</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-blue-600">
                <img src="./es.jpg" className="h-10 w-10 md:w-20 md:h-20" alt="" />
                <p>ES-6</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-green-300">
                <img src="./node.png" className="w-20" alt="" />
                <p>NodeJs</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-black">
                <img src="./express.png" className="w-20" alt="" />
                <p>ExpressJs</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-green-600">
                <img src="./mongo.jpg" className="w-20" alt="" />
                <p>MongoDB</p>
                </div>                
                <div className="shadow-md hover:scale-105 duration-500 py-4 px-10 rounded-lg shadow-lime-800">
                <img src="./github.png" className="w-20" alt="" />
                <p>GitHub</p>
                </div>                
                               
            </div>
            {/* </Marquee> */}
        </div>
    )
}
export default Skills;