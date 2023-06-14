import React from 'react';
import Navbar from '../navbar/Navbar';
import BannerBackground from '../../assets/images/banner-background.png';
import BannerImage from '../../assets/images/banner-image.png';
import MarketImage from '../../assets/images/market.png';
import StoreImage from '../../assets/images/store.png';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <img src={BannerBackground} alt="banner-background" className="absolute w-2/3 flex right-0 top-0 float-right" />
                <div className="relative ss:grid md:flex items-center justify-center px-8 top-24 gap-4">
                    <div className="grid items-center md:gap-6">
                        <h3 className="text-4xl font-bold text-grey-500 text-center">Your favourite online store</h3>
                        <p className="text-xl text-grey-500 text-center">Discover the best products</p>
                        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold my-4 py-2 px-4 md:w-1/4 rounded-full flex justify-center place-self-center">Shop Now</button>
                    </div>
                    <img src={MarketImage} alt="" className="md:w-1/3 w-3/4 flex place-self-center top-8 md:mx-auto" />
                </div>
                <div className="w-full h-full flex left-0">
                    <div className="flex flex-col z-1">
                        <img src={BannerImage} alt="banner-image" className="w-3/5 md:w-full float-left left-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
