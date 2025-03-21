import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import IconContactNameGray from '../../assets/icon-contact-name-gray.svg';
import IconContactEmailGray from '../../assets/icon-contact-email-gray.svg';
import IconContactPhoneGray from '../../assets/icon-contact-phone-gray.svg';
import IconContactMessageGray from '../../assets/icon-contact-message-gray.svg';

const sendEmail = (templateParams) => {
  return emailjs.send('contact_service', 'contact_form', templateParams, '1uKecjip-BXXuQhB0');
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        user_phone: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);
    const recaptchaRef = useRef(null);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSpinnerOpen(true);

        const recaptchaValue = await recaptchaRef.current.executeAsync();

        if (!recaptchaValue) {
            console.error('reCAPTCHA failed.');
            setIsSubmitting(false);
            setIsSpinnerOpen(false);
            return;
        }

        try {
            const templateParams = {
                ...formData,
                'g-recaptcha-response': recaptchaValue,
            };

            await sendEmail(templateParams);
            const successMsg = 'We have received your message and will respond within 48 hours.';
            setSuccessMessage(successMsg);
            setIsModalOpen(true); 
            setFormData({ from_name: '', user_email: '', user_phone: '', message: '' });
            recaptchaRef.current.reset();
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSubmitting(false);
            setIsSpinnerOpen(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSuccessMessage(null);
    };

    return (
      <section className="section-px section-mt max-w-6xl mx-auto">
        {/* Section wrapper */}
        <div className="max-w-[1200px]">
          {/* Heading */}
          <div className="mb-6 xl:mb-8 text-center lg:px-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-blue-0e90da font-bold mb-5.5">Say hello to us</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-757575 font-medium">We're ready to help you with any challenge you may be experiencing on the platform. We're available to help.</p>
          </div>

          {/* Contact form */}
          <form onSubmit={submitHandler} className="flex flex-col gap-8 xl:gap-14">
            {/* Details section */}
            <div className="flex flex-col gap-4 xl:gap-5">
              {/* Name, email, phone, location */}
              <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-5 xl:gap-y-5 xl:gap-x-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-gray-757575 font-medium block mb-1.5">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img src={IconContactNameGray} alt="Name icon" className="size-6" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="from_name" 
                      value={formData.from_name}
                      onChange={handleChange}
                      className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] ps-11 focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder-gray-b4b4b4" 
                      placeholder="Enter your name" 
                      required
                    />
                  </div>                            
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-gray-757575 font-medium block mb-1.5">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img src={IconContactEmailGray} alt="Email icon" className="size-6" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="user_email" 
                      value={formData.user_email}
                      onChange={handleChange}
                      className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] ps-11 focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder-gray-b4b4b4" 
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                </div>

                  {/* Phone */}
                  <div className="lg:col-span-2">
                    <label htmlFor="phone" className="text-gray-757575 font-medium block mb-1.5">Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={IconContactPhoneGray} alt="Phone icon" className="size-6" />
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="user_phone" 
                        value={formData.user_phone}
                        onChange={handleChange}
                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] ps-11 focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder-gray-b4b4b4" 
                        placeholder="Enter your phone number" 
                        required
                      />
                    </div>
                  </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-gray-757575 font-medium block mb-1.5">Message</label>
                <div className="relative">
                  <div className="absolute inset-y-4.5 start-0 flex ps-3.5 pointer-events-none">
                    <img src={IconContactMessageGray} alt="Message icon" className="size-6" />
                  </div>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] ps-11 focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder-gray-b4b4b4" 
                    placeholder="Type your message" 
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  size="invisible"
                />
              </div>
              <button
                type="submit"
                id="submit"
                className="w-full md:w-max md:self-end text-white text-base font-medium text-center bg-blue-29a8f1 hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] px-11 py-4"
                disabled={isSubmitting}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Spinner Modal */}
          {isSpinnerOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div role="status" className="flex flex-col items-center justify-center p-4 bg-white rounded-lg">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3185 21.5547 82.566 25.841C85.1192 29.2144 87.1704 33.0107 88.6174 37.0484C89.4035 39.4008 91.5422 40.9821 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <p className="mt-4">Submitting...</p>
              </div>
            </div>
          )}

          {/* Success Modal */}
          {isModalOpen && (
            <div className="section-px fixed inset-0 flex items-center justify-center bg-black/70 z-50">
              <div className="relative bg-blue-0e90da p-6 rounded-lg text-white max-w-lg mx-auto text-center shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">Message Sent!</h2>
                <p className="mb-4">{successMessage}</p>
                <button
                  className="bg-dark-primary px-6 py-2 rounded-md hover:bg-green-356534 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
};

export default ContactForm;