import FounderAvatar from "../../assets/avatar-temp-01.png";

export default function AboutFounderMessage() {
  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        <div className='flex flex-col gap-6 lg:gap-19'>
            {/* Top section */}
            <div className="flex flex-col">
                <h2 className="font-semibold tracking-tight text-gray-600 text-3xl lg:text-[2.5rem] lg:leading-14 text-pretty max-w-[520px]">
                    We’re <span className='text-gray-900'>building the</span> bridge to smart <span className='text-gray-900'>inventory management for</span> customers
                </h2>
            </div>
            {/* Bottom section */}
            <div className='flex flex-col-reverse lg:flex-row gap-6'>
                {/* Image and name */}
                <div class="flex gap-4 flex-1">
                    <img class="size-14 lg:size-18.5 rounded-full" src={FounderAvatar} alt="Raotori's founder's avatar" />
                    <div class="">
                        <div className="text-gray-600 lg:text-2xl font-medium">Mr Rao</div>
                        <div class="lg:text-xl font-bold">Founder, Raotory</div>
                    </div>
                </div>
                {/* Message */}
                <div className='flex-1'>
                    <p className="lg:text-right text-gray-600 text-xl">
                        We are committed to delivering an efficient and reliable inventory management system that helps businesses optimize their stock levels and streamline their operations. Our goal is to maintain accurate inventory tracking, ensuring that businesses can effectively manage their stock without the risks of overstocking or stockouts. By using advanced technology and real-time tracking, we aim to provide solutions that not only enhance inventory accuracy but also reduce costs associated with excess inventory and manual errors.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}