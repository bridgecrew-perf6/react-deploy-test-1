const About = ({ bgColor, textColor }) => {
    return (
        <div className="About" style={{ background: bgColor, color: textColor }}>
            <h3>About</h3>
            <p>I'm Wojciech and I really enjoy making websites and web apps. My adventure started on August 2021 and I keep improving my skills!</p>
        </div>
    );
}

export default About;