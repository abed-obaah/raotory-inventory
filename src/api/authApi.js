import axios from "axios";

const API_URL = "https://raotory.com/apis"; // Base API URL

// Register a new user
export const registerUser = async (full_name, email, password, confirm_password) => {
  try {
    const response = await axios.post(`${API_URL}/register.php`, {
      full_name,
      email,
      password,
      confirm_password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Ensure the API returns a success response with user data or token
  } catch (error) {
    throw error.response?.data?.message || "Registration failed!";
  }
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post(
      `${API_URL}/verify_otp.php`,
      { email, otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Expected to return success message or user data
  } catch (error) {
    throw error.response?.data?.message || "OTP verification failed!";
  }
};

// Login an existing user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login.php`, {
      email,
      password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(data)
    return response.data; // Ensure API returns a user object and token
  } catch (error) {
    throw error.response?.data?.message || "Login failed!";
  }
};