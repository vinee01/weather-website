import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='text-center footer'>

        <a className='footer-icons' href="https://www.linkedin.com/in/vineet-tirole-b6a214245/">
        <LinkedInIcon className='footer-icon'/>
        </a>

        <a className='footer-icons' href='https://github.com/vinee01'>
        <GitHubIcon className='footer-icon'/>
        </a>

        <a className='footer-icons' href='https://www.instagram.com/__vineet.07__/'>
        <InstagramIcon className='footer-icon'/>
        </a>

        <p className='footer-text'>Copyright &copy; 2023 | Vineet Tirole</p>
        </div>
    );
}

export default Footer