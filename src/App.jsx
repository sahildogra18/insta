import "./App.css";
import logo from "./assets/flick.png";
import ailogo from "./assets/ai.png";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import propic from "./assets/WhatsApp Image 2025-01-12 at 21.50.34_9d5077fa.jpg";
import { CiCirclePlus } from "react-icons/ci";
import propic2 from "./assets/cv.jpg";
import propic3 from "./assets/Virat-Kohli.jpg";
import propic4 from "./assets/jj.jpg";
import { FaPlus } from "react-icons/fa";
import djr from "./assets/jam.jpg";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
function App() {
  return (
    <>
      <div className="container">
        <div className="barca">
          <div className="top">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="logo-2">
              <div className="ty">
                <img src={ailogo} alt="" />
              </div>
              <div className="r">
                <FaRegHeart />
              </div>
              <div className="r">
                <TbMessageCircle />
              </div>
              <div></div>
            </div>
          </div>

          <div className="second-top">
            <div className="gf tm">
              <div>
                <img src={propic} alt="" />
              </div>
              <div className="gk">
                <FaPlus />
              </div>
              <div className="c">Your story</div>
            </div>

            <div className="gf er">
              <div>
                <img src={propic4} alt="" />
              </div>
              <div className="c">dogra_sudhanshu</div>
            </div>

            <div className="gf rj">
              <div>
                <img src={propic2} alt="" />
              </div>
              <div className="c">ferro_david</div>
            </div>

            <div className="gf er">
              <div>
                <div>
                  <img src={propic3} alt="" />
                </div>
                <div className="c">virat.18</div>
              </div>
            </div>
          </div>

          <div className="heroSection">
            <div className="you">
              <div className="uy">
                <img src={djr} alt="" />
              </div>
              <div>
                <div className="k">elitesWealthh</div>
                <div className="nm">
                  <IoMusicalNotesSharp /> hazel, instrumental version, Karaoke
                  boy, slow-...
                  <div className="mn">
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oi">
            <img src={djr} alt="" />
          </div>

          <div className="heroSection">
            <div className="you">
              <div className="uy">
                <img src={djr} alt="" />
              </div>
              <div>
                <div className="k">elitesWealthh</div>
                <div className="nm">
                  <IoMusicalNotesSharp /> hazel, instrumental version, Karaoke
                  boy, slow-...
                  <div className="mn">
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oi">
            <img src={djr} alt="" />
          </div>

          <div className="footer">
            <div>
              <RiHome2Line />
            </div>
            <div>
              <FaSearch />
            </div>
            <div>
              <MdOutlineAddBox />
            </div>
            <div>
              <MdVideoLibrary />
            </div>
            <div className="uy ">
              <img src={propic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
