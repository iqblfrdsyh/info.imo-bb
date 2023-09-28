import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillApple,
} from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-y-2 items-center relative w-full bottom-0 mt-[100px] bg-transparent">
      <div className="flex justify-between flex-wrap px-16 py-11">
        <div>
          <h3 className="text-[25px] font-semibold">Info.Imo-BB</h3>
          <p>2023 Info.Imo-BB</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold">About</h3>
          <p>
            <a href="">Privacy Policy</a>
          </p>
          <p>
            <a href="">Help Center</a>
          </p>
          <p>
            <a href="">Terms & Condition</a>
          </p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold">Follow Us on</h3>
          <div className="flex flex-wrap justify-evenly">
            <Link to="#">
              <FaFacebookF size={26} color="#3b5998" />
            </Link>
            <Link to="#">
              <AiOutlineTwitter size={30} color="#00acee" />
            </Link>
            <Link to="#">
              <AiOutlineInstagram size={30} color="purple" />
            </Link>
            <Link to="#">
              <AiOutlineYoutube size={30} color="#c4302b" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold mb-2 text-center">
            Download MLBB
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link to="#">
              <button className="border-2 py-1 flex items-center flex-wrap gap-2 px-3 border-slate-600 rounded-md hover:bg-zinc-300 transition hover:scale-[0.99]">
                <BiLogoPlayStore size={30} />
                Play Store
              </button>
            </Link>
            <Link to="#">
              <button className="border-2 py-1 flex items-center flex-wrap gap-2 px-3 border-slate-600 rounded-md hover:bg-zinc-300 transition hover:scale-[0.99]">
                <AiFillApple size={30} />
                App Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
