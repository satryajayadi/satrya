import Navbar from "../components/navbar";
import Footer from "../components/bebas";
import { KonsultasiSVG } from "../public/asset";
const Jay = () => {
  return (
    <>
      <Navbar />
      <div className="background1 flex items-center px-44">
        <div className="flex flex-col gap-y-3">
          <p className="text-white font-bold text-3xl w-3/4">
            Wujudkan rumah impian Anda bersama kami
          </p>
          <p className="text-white">
            Hadir untuk menjadi solusi bagi Anda yang sedang mencari kontraktor
            terpercaya.
          </p>
          <button className="flex flex-row bg-gradient-to-r from-green-400/80 to-green-700/80 px-3 py-2 rounded-md items-center gap-x-2 w-fit">
            <p className="text-white">Konsultasi Gratis</p>
            <KonsultasiSVG />
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Jay;
