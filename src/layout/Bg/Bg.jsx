import "./Bg.css"
import svg from './../../assets/st1.svg'
import wave from "./../../assets/wave.svg"
import wave2 from "./../../assets/wave2.svg"

function Bg() {
    return (
    
        <div className='bg'>
            <img className="bg-left" src={svg} alt="" />
            <img className="bg-r" src={svg} alt="" />
            {/* <img className="wave-top" src={wave} alt="" /> */}
            {/* <img className="wave-bot" src={wave2} alt="" /> */}
        </div>
    

    )
}

export default Bg