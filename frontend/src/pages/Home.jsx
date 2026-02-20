import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'

import { MdOutlineRateReview } from 'react-icons/md'
import { FaArrowRight, FaCheckSquare, FaPlane, FaPlay, FaQq, FaQrcode, FaQuestion, FaQuestionCircle, FaQuidditch, FaQuinscape, FaQuora, FaQuoteLeft, FaQuran, FaRegQuestionCircle, FaUser } from "react-icons/fa"

import { motion } from 'framer-motion'
import { fadeIn, } from './../components/common/motionFrameVarients';

// background random images
import backgroundImg1 from '../assets/Images/random bg img/back-4.jpg'
import backgroundImg2 from '../assets/Images/random bg img/back-3.jpg'
import backgroundImg3 from '../assets/Images/random bg img/back-2.png'
import backgroundImg4 from '../assets/Images/random bg img/back-1.png'
import backgroundImg5 from '../assets/Images/random bg img/back.png'


const randomImges = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
    backgroundImg5,
];

// hardcoded



const Home = () => {

    // get background random images
    const [backgroundImg, setBackgroundImg] = useState(null);

    useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
        setBackgroundImg(bg);
    }, [])

    // console.log('bg ==== ', backgroundImg)

    // get courses data
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data ==== ",CatalogPageData);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])


    // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)


    return (
        <React.Fragment>
            {/* background random image */}
            <div>
                <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
                    <img src={backgroundImg} alt="Background"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
                </div>
            </div>

            <div className=' '>
                {/*Section 1*/}
                <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent text-white '>

                    <Link to={"/signup"}>
                        <div className='z-0 group mt-10 p-1 mx-auto rounded-full bg-blue-900 font-bold text-white
                                        transition-all duration-200 hover:scale-95 w-fit'>
                            <div className='flex flex-row items-center gap-2 rounded-full px-5 py-[5px]
                              transition-all duration-200 group-hover:bg-richblue-100 gradient_color'>
                                Become an Instructor or a Student
                            </div>
                        </div>

                    </Link>

                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-3xl lg:text-4xl font-semibold'
                    >

                        <h1 className="text-3xl lg:text-4xl font-semibold mt-7">
                            <HighlightText text="Learn every day" />{" "}
                            <span>to build the future you</span>
                        </h1>
                        <span className='text-3xl lg:text-4xl font-semibold mt-1'>dream of.</span>

                    </motion.div>



                    <motion.div
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-3xl lg:text-4xl font-semibold'
                    >
                        <h1 className="text-3xl lg:text-4xl font-semibold mt-7">
                            <span>Try yourself in </span>

                            <TypeAnimation
                                sequence={[
                                    "Java", 2000,
                                    "", 500,
                                    "C#", 2000,
                                    "", 500,
                                    "Node.js", 2000,
                                    "", 500,
                                    "C++", 2000,
                                    "", 500,
                                    "MongoDB", 2000,
                                    "", 500,
                                    "React.js", 2000,
                                    "", 500,
                                    "JavaScript", 2000,
                                    "", 500,
                                    "HTML5", 2000,
                                    "", 500,
                                    "CSS3", 2000,
                                    "", 500,
                                    "Python", 2000,
                                    "", 500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-richblue-200 gradient_color"
                            />
                        </h1>

                    </motion.div>


                    <div className='flex flex-row gap-7 mt-8'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <span className='text-base'>Explore Courses</span>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/login"}>
                            <span className='text-base'>Create, Inspire, and teach the world with us</span>
                        </CTAButton>
                    </div>

                    <div className="w-full py-6 mt-6 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-white">

                            {/* Students */}
                            <div className="flex items-center gap-2">
                                <FaUser />
                                <div>
                                    <p className="text-xl font-semibold">200k+</p>
                                    <p className="text-richblack-400 text-sm">Students</p>
                                </div>
                            </div>

                            {/* Courses */}
                            <div className="flex items-center gap-2">
                                <FaPlay />
                                <div>
                                    <p className="text-xl font-semibold">500+</p>
                                    <p className="text-richblack-400 text-sm">Courses</p>
                                </div>
                            </div>

                            {/* Articles */}
                            <div className="flex items-center gap-2">
                                <FaCheckSquare />
                                <div>
                                    <p className="text-xl font-semibold">1200+</p>
                                    <p className="text-richblack-400 text-sm">Articles</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                    <ExploreMore />
                </div>

                {/*Section 2*/}
                <div className='text-richblack-700 '>
                    <div className='h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[190px]'></div>
                            <div className='flex flex-row gap-7 text-white '>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div className='flex items-center gap-3' >
                                        Explore Full Catalog
                                        <FaArrowRight />
                                    </div>
                                </CTAButton>
                                <CTAButton active={false} linkto={"/signup"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                            </div>
                        </div>
                    </div>

                </div>

                {/*Footer */}
                <Footer />
            </div >
        </React.Fragment>
    )
}

export default Home
