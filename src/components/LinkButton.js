const LinkButton = ({ bg, link, icon, text }) => {
    return (
        <a className='LinkButton' style={{background: bg}} target="_blank" href={link}>
            <img src={icon} alt="" />
            <p>{text}</p>
        </a>
    );
}

export default LinkButton;