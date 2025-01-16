import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://rice-and-spice-house-server.vercel.app/",
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;