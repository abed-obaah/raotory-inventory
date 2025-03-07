import { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    
    return (
        <section className='section-px'>
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl my-10">
                
                {/* Heading */}
                <div className="mb-13">
                    <h2 className="text-[2rem] font-semibold">
                        Forgot Password
                    </h2>
                    <p className="text-gray-600">
                        Please enter the email address associated with your account.
                    </p>
                </div>
    
                {/* Form */}
                <div className="w-full">
                    <form action="#" method="POST" className="space-y-52">
                        {/* Email */}
                        <div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                                placeholder="Email address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>

                        {/* Button */}
                        <div className="mb-4">
                            <button
                                type="submit"
                                className={`flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center me-2 focus:outline-none focus:ring-4 focus:ring-blue-300 ${email.includes('@') ? 'bg-blue-500 text-white' : 'bg-gray-d9d9d9 text-gray-500 cursor-not-allowed'}`}
                                disabled={!email.includes('@')}
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}