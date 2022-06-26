import ProfilePic from '../images/profilepic.png'
import MailIcon from '../images/mail.svg'
import LinkButton from './LinkButton'
import LinkedInIcon from '../images/linkedin.svg'

const Info = () => {
    return (
        <div className="Info">
            <img className='ProfilePic' src={ProfilePic} alt=""/>
            <h2>Wojciech Glid</h2>
            <p>Frontend Developer</p>
            <p>@thewasteghost</p>
            <section>
                <LinkButton bg="white" link="https://www.google.com/" icon={MailIcon} text="Email"/>
                <LinkButton bg="aquamarine" link="https://www.google.com/" icon={LinkedInIcon} text="LinkedIn"/>
            </section>
        </div>
    );
}

export default Info;