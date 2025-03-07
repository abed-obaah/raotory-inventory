import MntLogo from '../assets/mnt-logo.svg';
import MedicareLogo from '../assets/medicare-logo.svg';
import HssLogo from '../assets/hss-logo.svg';
import PtcbLogo from '../assets/ptcb-logo.svg';
import PharmacyTimesLogo from '../assets/pharmacy-times-logo.svg';

export default function TopBrands() {
    return (
        <section className="section-mt section-px max-w-6xl mx-auto">
            <div>
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                    Trusted by Top <span className='font-bold'>Brands</span>
                </h2>
                <div className="flex flex-col gap-y-6 items-center mt-6 md:mt-10">
                    {/* Top row */}
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center sm:gap-x-10'>
                        <img
                            alt="MNT logo"
                            src={MntLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="Medicare logo"
                            src={MedicareLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="HSS logo"
                            src={HssLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="PTCB logo"
                            src={PtcbLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="Pharmacy Times logo"
                            src={PharmacyTimesLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    {/* Bottom row */}
                    <div className='hidden md:grid grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10 items-center sm:gap-x-10'>
                        <img
                            alt="MNT logo"
                            src={MntLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="Medicare logo"
                            src={MedicareLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="PTCB logo"
                            src={PtcbLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                        <img
                            alt="Pharmacy Times logo"
                            src={PharmacyTimesLogo}
                            width={"100%"}
                            height={"100%"}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
  }
  