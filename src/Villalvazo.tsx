import "animate.css";
import { FaInstagram } from "react-icons/fa";
import backgroundGif from "/vilalvazo.gif"; // Ajusta esta ruta según la ubicación real de tu GIF
export const Villalvazo = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-transparent">
            {/* GIF de fondo */}
            <div className="absolute inset-0 z-0 bg-red-500">
                <img
                    src={backgroundGif}
                    alt="Fernando Villalvazo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay semitransparente */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            {/* Contenido superpuesto */}
            <div className="relative z-20 flex flex-col items-center justify-center p-4 bg-transparent">
                <h1
                    id="logo"
                    className="animate__animated animate__fadeIn text-4xl sm:text-5xl md:text-6xl font-thin mb-4 text-center whitespace-nowrap text-white shadow-text"
                >
                    Fernando Villalvazo
                </h1>

                <a
                    href="https://www.instagram.com/f.ernando_v?igsh=MWFqc2RvZGgyYjI5cQ=="
                    target="_blank"
                    className="transform transition duration-300 ease-in-out hover:-translate-y-1"
                >
                    <FaInstagram
                        size={40}
                        color="#FFFFFF"
                        className="animate__animated animate__fadeIn"
                        style={{
                            backgroundColor: "transparent",
                            fill: "white",
                        }}
                    />
                </a>
                <p className="animate__animated animate__fadeInUp mt-2 text-white shadow-text">
                    Follow on Instagram
                </p>
            </div>
        </div>
    );
};
