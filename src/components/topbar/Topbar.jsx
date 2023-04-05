import "./topbar.scss";
import {WhatsApp, Mail} from "@material-ui/icons";


export default function topbar({menuOpen, setMenuOpen}) {

  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">heythisisAditi.</a>
                <div className="details">
                <div className="itemContainer">
                    <WhatsApp  className="icon"/>
                    <a href="https://wa.me/918777831265?text=Hey! Just had a look into your portfolio Website" target="_blank"><span>Whatsapp</span></a>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <a href="mailto:aditiray2022@gmail.com" target="_blank"><span>Email</span></a>
                </div>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>   
    </div>
  )
}
