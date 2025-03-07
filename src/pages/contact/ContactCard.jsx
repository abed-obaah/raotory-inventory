import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import ButtonSquareSolid from "../../components/ButtonSquareSolid";

export default function ContactCard() {

  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        {/* Section wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 bg-blue-001b2a p-8 rounded-[8px] max-w-[1200px]">
            {/* Title */}
            <div class="">
                <p className="text-white-f8fdff text-[1.75rem] font-medium">
                    Still have questions?
                </p>
                <p class="text-white-f8fdff text-lg font-medium">
                    We are here to help.
                </p>
                {/* Button */}
                <div className="hidden md:flex xl:hidden items-center mt-4">
                    <ButtonSquareSolid text="Chat With Us" href="#" />
                </div>
            </div>

            {/* Phone, email, button */}
            <div className="flex flex-col gap-6 md:gap-2 xl:gap-4 lg:flex-row xl:w-[65%] xl:justify-between">
                {/* Phone */}
                <div class="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 bg-gray-700 rounded-full shrink-0">
                        <FaPhoneAlt className="size-5" />
                    </div>
                    <div class="">
                        <div className="text-white-f8fdff text-lg font-medium">+234 Raotory</div>
                        <div class="text-white-f8fdff text-sm font-medium">Support Hotline</div>
                    </div>
                </div>
                {/* Email */}
                <div class="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 bg-gray-700 rounded-full shrink-0">
                        <MdOutlineMarkEmailUnread className="size-5" />
                    </div>
                    <div class="">
                        <div className="text-white-f8fdff text-lg font-medium">support@raotory.com</div>
                        <div class="text-white-f8fdff text-sm font-medium">Support Email</div>
                    </div>
                </div>
                {/* Button */}
                <div className="flex items-center md:hidden xl:flex">
                    <ButtonSquareSolid text="Chat With Us" href="#" />
                </div>
            </div>
        </div>
    </section>
  )
}