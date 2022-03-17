import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSliderImage from '../../img/2022_TIB_ORKG_Ads_Twitter1_dc790e0716.jpg';
import cited from '../../img/benefits/cited.svg';
import community from '../../img/benefits/community.svg';
import contribute from '../../img/benefits/contribute.svg';
import convince from '../../img/benefits/convince.svg';
import feedback from '../../img/benefits/feedback.svg';
import reputation from '../../img/benefits/reputation.svg';
import visibility from '../../img/benefits/visibility.svg';
import './HomeBody.css';

export default function HomeBody() {
  return (
    <>
        <div className='container mx-auto lg:w-3/5 sm:w-11/12 text-gray-700'>
            <div className='text-center py-4 bg-white drop-shadow-lg px-2 rounded-md -mt-10'>
                <div className='w-full h-12 flex justify-between rounded-md border-b pb-4'>
                    <div className='flex content-center items-center'>
                        <svg className='w-6 h-6 fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                        <p className='lg:text-lg sm:text-xs mx-2'>Browse by research field</p>
                    </div>
                    <div className='flex content-center items-center'>
                        <input type="text" class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-400 focus:ring-red-400 block w-full rounded-md sm:text-sm focus:ring-2" placeholder="Search for fields..." />
                    </div>
                </div>
            </div>

            <div className='grid gap-x-4 sm:gap-y-4 lg:grid-cols-3 sm:grid-cols-1 my-4'>
                    <div className='lg:col-span-2 sm:col-span-1'>
                        <div className="w-full h-20 bg-white rounded-md drop-shadow-lg">
                        
                        </div>
                    </div>
                    <div>
                        <div className='px-4 drop-shadow-lg h-auto w-full rounded-md bg-white'>
                            <div className='border-b py-2'>Latest news</div>
                            <div className="">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    }}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className="py-2">
                                        <h2 className="text-xl">ORKG Curation Grants - Call for <br></br> Applications Open</h2>
                                        <img className="h-4/5 mb-2" src={firstSliderImage} alt="firstSliderImage"></img>
                                    </SwiperSlide>
                                    <SwiperSlide className="py-2">
                                        <h2 className="text-xl">New feature: literature lists</h2>
                                        <span className="italic text-sm text-gray-600">13 December 2021</span>
                                        <p className="text-gray-600">The ORKG literature list feature is now available. You can now create a curated list <br></br> of related literature and they can form the starting point of ORKG comparisons. <a className="text-red-400 hover:border-b" href="#">Visit the literature lists</a></p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className='px-4 my-4 drop-shadow-lg h-auto w-full rounded-md bg-white'>
                            <div className='border-b py-2 flex justify-between'>
                                <p className="py-1">Join ORKG!</p>
                                <button className="px-4 py-1 bg-gray-500 text-white rounded-md cursor-pointer">Sign Up</button>
                            </div>
                            <div className="">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    }}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className="pt-16 pb-20">
                                        <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={cited} alt='cited'></img>
                                                <h2 className="text-xl">Get cited</h2>
                                            </div>
                                            <p className="text-justify text-sm">If others can quickly determine the merits of your work with a suitable ORKG representation, they are more likely to build on your work or position their work in relation to yours and thus cite you.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={feedback} alt='cited'></img>
                                                <h2 className="text-xl">Get qualitative feedback</h2>
                                            </div>
                                            <p className="text-justify text-sm ">Collaboratively working on comparisons and visualizations of the state-of-the art in your field will give you insights on how others see your work in comparison. You can observe the strengths and weaknesses of different approaches in ORKG comparisons, visualizations and leaderboards.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={convince} alt='convince'></img>
                                                <h2 className="text-xl">Convince peer-reviewers</h2>
                                            </div>
                                            <p className="text-justify text-sm ">When you accompany your research with an ORKG comparison showing how your approach compares to the state-of-the-art you help peer-reviewers to understand the merits of your work and chances your paper will be accepted increase.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={community} alt='community'></img>
                                                <h2 className="text-xl">Provide a key service to your <br></br> community</h2>
                                            </div>
                                            <p className="text-justify text-sm ">Researcher like you are craving for obtaining an overview on the state-of-the art in your field. By organizing the research as comparisons and visualizations you will help many in your field to stay atop of the paper flood.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={contribute} alt='contribute'></img>
                                                <h2 className="text-xl">Knowledge base for science</h2>
                                            </div>
                                            <p className="text-justify text-sm ">We are flooded with new publications in research every day and it is increasingly challenging to keep up with the information overload. By organizing research contributions in the ORKG you help yourself and others in your field to keep oversight over the state-of-the-art.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={visibility} alt='visibility'></img>
                                                <h2 className="text-xl">Get more visibility</h2>
                                            </div>
                                            <p className="text-justify text-sm ">We prominently acknowledge all contributions to the ORKG. Other researchers in your field will appreciate the service you are doing.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pt-16 pb-20">
                                    <div className="my-4 px-2 text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <img className="w-16 h-16" src={reputation} alt='reputation'></img>
                                                <h2 className="text-xl">Build reputation</h2>
                                            </div>
                                            <p className="text-justify text-sm ">Creating reasonable ORKG descriptions for approaches tackling key research problems in your field will help you building a reputation. Once your contributions reached a certain maturity level, they can even be formally published as a scientific publication (e.g. by assigning a DOI to a comparison) and can receive citations.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>


                        <div className="px-4 my-4 drop-shadow-lg h-auto w-full rounded-md bg-white">
                            <div className='border-b py-2 flex justify-between items-center'>
                                <h2 className="text-2xl font-light">Observatories</h2>
                                <a href="more" className="text-red-400 ">More observatories</a>
                            </div>
                            <div className="py-8">
                                 <p className=""><span className="text-lg font-medium">No observatories yet!</span> <br></br>
                                How observatories are managed? <a href="help center" className="text-red-400">ORKG help center</a></p>
                            </div>
                        </div>


                        <div className="px-4 my-4 drop-shadow-lg h-auto w-full rounded-md bg-white">
                            <div className='py-2 flex items-center'>
                            <svg className="w-6 h-6 fill-red-400 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z"/></svg>
                                <h2 className="text-2xl font-light">Top Contributors</h2>
                            </div>
                            <div className="py-8">
                                 <p className=""><span className="text-lg font-medium">No contributors in this research field yet.</span> <br></br>
                                 <span className="italic">Be the first contributor!</span></p>
                            </div>
                        </div>


                        <div className="px-4 my-4 drop-shadow-lg h-auto w-full rounded-md bg-white">
                            <div className='py-2 flex items-center'>
                                <h2 className="text-2xl font-light">Last updates</h2>
                            </div>
                            <div className="py-8">
                                 <p className=""><span className="text-lg font-medium">No updates in this research field yet.</span> <br></br>
                                 <span className="italic">Be the first to start building the knowledge!</span></p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>     
    </>
  )
}
