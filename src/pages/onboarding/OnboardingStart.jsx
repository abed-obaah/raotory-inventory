import { useState, useRef, useEffect } from "react";
import { MdFlashOn } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";

export default function OnboardingStart({ selectStoreType }) {
    const [isAnnual, setIsAnnual] = useState(true);
    const monthlyRef = useRef(null);
    const annualRef = useRef(null);
    const [highlightStyle, setHighlightStyle] = useState({});

    const formatPrice = (price) => price.toLocaleString();

    const monthlySingleStorePrice = Math.round(50000 / (0.8 * 12));
    const monthlyMultiStorePrice = Math.round(80000 / (0.8 * 12));
    
    const singleStorePrice = isAnnual ? 50000 : monthlySingleStorePrice;
    const multiStorePrice = isAnnual ? 80000 : monthlyMultiStorePrice;

    // Adjust the highlight dynamically
    useEffect(() => {
        if (monthlyRef.current && annualRef.current) {
            const activeRef = isAnnual ? annualRef.current : monthlyRef.current;
            setHighlightStyle({
                width: activeRef.offsetWidth,
                left: activeRef.offsetLeft,
            });
        }
    }, [isAnnual]);

    return (
        <section className="section-px max-w-6xl mx-auto">
            <div>
                {/* Heading */}
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <p className="hidden text-lg lg:text-3xl text-gray-600 opacity-50">Pricing</p>
                    <h2 className="mt-2 max-w-md mx-auto text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
                        Our Pricing Plans
                    </h2>
                </div>

                {/* Toggle Switch */}
                <div
                    className="relative flex items-center bg-gray-d9d9d9 mx-auto h-[60px] rounded-[50px] px-2 cursor-pointer w-fit mb-11"
                    onClick={() => setIsAnnual(!isAnnual)}
                >
                    {/* Dynamic Blue Highlight */}
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 bg-blue-29a8f1 rounded-[50px] h-[51px] transition-all duration-300"
                        style={highlightStyle}
                    />

                    {/* Monthly Option */}
                    <div
                        ref={monthlyRef}
                        className={`relative z-10 text-base font-medium px-5 py-2 transition-colors ${
                            isAnnual ? "text-[#757575]" : "text-white"
                        }`}
                    >
                        Monthly
                    </div>

                    {/* Annual Option */}
                    <div
                        ref={annualRef}
                        className={`relative z-10 text-base font-medium px-5 py-2 transition-colors ${
                            isAnnual ? "text-white" : "text-[#757575]"
                        }`}
                    >
                        Annual (save 20%)
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-12">
                    {/* Single Store Pricing Card */}
                    <div className="flex flex-col p-6 max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow">
                        {/* Plan icon */}
                        <div className="flex items-center justify-center border border-black-10-percent rounded-full size-10 mb-6">
                            <MdFlashOn className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        {/* Plan title */}
                        <h3 className="mb-2 text-2xl font-semibold">Single Store</h3>
                        {/* Plan description */}
                        <p className="font-light text-gray-500 text-base leading-5">
                            Select this option if your business has just one location.
                        </p>
                        {/* Horizontal rule */}
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5" />
                        {/* Price */}
                        <div className="flex justify-center items-baseline mb-6">
                            <span class="mr-2 text-[2rem] font-bold">
                                NGN {formatPrice(singleStorePrice)}
                            </span>
                            <span className="text-gray-500">/{isAnnual ? "year" : "month"}</span>
                        </div>
                        {/* List */}
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>One store</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Unlimited orders daily</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Can add team</span>
                            </li>
                        </ul>
                        {/* Button */}
                        <button
                            onClick={() => selectStoreType("single")}
                            className="w-full text-white text-base font-medium text-center bg-blue-29a8f1 hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] px-11 py-2.5"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Multi Stores Pricing Card */}
                    <div 
                        style={{ background: "linear-gradient(180deg, #8FD7FF 0%, rgba(126, 184, 217, 0.398242) 43.59%, rgba(118, 169, 198, 0.1165) 64%, rgba(7, 77, 116, 0.05) 100%)" }}
                        className="flex flex-col p-6 max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow"
                    >
                        {/* Plan icon */}
                        <div className="flex items-center justify-center border border-white bg-white rounded-full size-10 mb-6">
                            <IoDiamondOutline className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        {/* Plan title */}
                        <h3 className="mb-2 text-2xl font-semibold">Multi Stores</h3>
                        {/* Plan description */}
                        <p className="font-light text-gray-500 text-base leading-5">
                            Select this option if your business has different locations.
                        </p>
                        {/* Horizontal rule */}
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5" />
                        {/* Price */}
                        <div className="flex justify-center items-baseline mb-6">
                            <span class="mr-2 text-[2rem] font-bold">
                                NGN {formatPrice(multiStorePrice)}
                            </span>
                            <span className="text-gray-500">/{isAnnual ? "year" : "month"}</span>
                        </div>
                        {/* List */}
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Up to 5 stores</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Unlimited orders daily</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Can add team</span>
                            </li>
                        </ul>
                        <button
                        onClick={() => selectStoreType("multi")}
                            className="w-full text-white text-base font-medium text-center bg-blue-29a8f1 hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] px-11 py-2.5"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="mt-11">
                    <p className="text-base md:text-xl font-semibold leading-6 text-center max-w-56 mx-auto">
                        Contact <a href="/contact" className="text-blue-29a8f1">sales</a> to create store greater than 5
                    </p>
                </div>
            </div>
        </section>
    );
}