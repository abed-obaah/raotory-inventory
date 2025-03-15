import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://raotory.com/apis/forget_password.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            console.log(data);

            if (data.status === "success") {
                navigate("/reset-otp", { state: { email } });
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.log("test:",error)
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-px">
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10 border border-gray-300 rounded-xl my-10">
                <h2 className="text-2xl font-semibold">Forgot Password</h2>
                <p className="text-gray-600">
                    Please enter your email to receive an OTP.
                </p>

                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            className="bg-white border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg"
                        disabled={loading}
                    >
                        {loading ? "Sending OTP..." : "Continue"}
                    </button>
                </form>
            </div>
        </section>
    );
}
