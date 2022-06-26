import ProfilePic from '../images/profilepic.png'
import MailIcon from '../images/mail.svg'
import LinkButton from './LinkButton'
import LinkedInIcon from '../images/linkedin.svg'

const Info = ({ bgColor, textColor, btnColors }) => {
    return (
        <div className="Info" style={{ background: bgColor, color: textColor }}>
            <img className='ProfilePic' src={ProfilePic} alt="" />
            <h2>Wojciech Glid</h2>
            <p style={{ color: btnColors[1] }}>Frontend Developer</p>
            <p style={{ color: textColor, opacity: 0.5 }}>@thewasteghost</p>
            <section>
                <LinkButton bg={btnColors[0]} link="https://www.google.com/" icon={MailIcon} text="Email"/>
                <LinkButton bg={btnColors[1]} link="https://www.google.com/" icon={LinkedInIcon} text="LinkedIn"/>
            </section>
        </div>
    );
}

export default Info