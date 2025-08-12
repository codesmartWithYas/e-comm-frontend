import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
        Built With
        <FontAwesomeIcon icon={faHeart} className="text-red-600 mx-1 animaed-pulse" aria-hidden="true"/>
        by
        <a href="https://eazybytes.com" target="_blank" rel="noopener noreferrer" 
        className="text-primary font-semibold px-1 trasition-colors duration-300 hover:text-dark hover:text-dark">
            eazybytes
        </a>
    </footer>
  );
};

export default Footer;
