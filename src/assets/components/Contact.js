// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FiMail } from "react-icons/fi";
import { FaChevronCircleUp, FaFilePdf } from "react-icons/fa";
import { contactInfo } from "../../data";

const mail = `mailto:${contactInfo.email}`;
const phone = `tel:${contactInfo.phone}`;

const Contact = ({ theme, avatar, name }) => {
  const newTheme = `${theme} d-flex flex-column justify-content-center`;

  return (
    <section id="contact" className={newTheme}>
      <div className="container text-center">
        <h2>Contact</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={avatar} alt={name} />
          </div>
          <div className="col-lg-6">
            <h3>{name}</h3>
            {contactInfo.email && contactInfo.email !== "" ? (
              <a href={mail}>
                Email: <span>{contactInfo.email}</span>
              </a>
            ) : (
              ""
            )}
            <br />
            {contactInfo.phone && contactInfo.phone !== "" ? (
              <a href={phone}>
                phone: <span>{contactInfo.phone}</span>
              </a>
            ) : (
              ""
            )}
            {(!contactInfo.email || contactInfo.email === "") &&
            (!contactInfo.phone || contactInfo.phone === "") ? (
              <a href={contactInfo.mailChimp} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-secondary btn-lg">
                  <FiMail /> Contact me
                </button>
              </a>
            ) : (
              ""
            )}
            {/*
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <a href="https://drive.google.com/uc?id=14LBgA40snCO0Koo9GX8BpWWliTJ2xiKo&export=download">
                    <FaFilePdf className="display-4" />
                  </a>
                  <div>RESUME</div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
        <Link className="scroll" to="about" smooth={true} duration={750}>
          <FaChevronCircleUp id="scroll-up" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
