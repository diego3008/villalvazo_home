import "animate.css";
import { FaInstagram } from "react-icons/fa";
export const Villalvazo = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1
                id="logo"
                className="animate__animated animate__fadeIn text-6xl font-thin mb-4 text-center"
            >
                Fernando Villalvazo
            </h1>
            <a
                href="https://www.instagram.com/f.ernando_v?igsh=MWFqc2RvZGgyYjI5cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 ease-in-out hover:-translate-y-1"
            >
                <FaInstagram
                    size={48}
                    color="#E1306C"
                    className="animate__animated animate__fadeIn"
                />
            </a>
            <p className="animate__animated animate__fadeInUp">
                Follow on Instagram
            </p>
        </div>
    );
};
