import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://x.com/Khan73986Khan/photo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-x-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/farii.khan.7315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/@FKAllRounderYT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/mr_fareed02/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/fareed-gul-946329333/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BTeXXtMFmSLymyHSzvLnJeA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>
      <p>© {new Date().getFullYear()} TodoPro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
