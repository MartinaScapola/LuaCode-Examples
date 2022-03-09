import InputButton from "../../components/InputButton";
import HeroCard from "../../components/HeroCard";
import CourseCard from "../../components/CourseCard";
import CarrouselCard from "../../components/CarrouselCard";

export default function Skillex() {
  return (
    <>
      <header className="headerWrapper">
        <div className="logoWrapper"> logo (imagen) </div>
        <nav className="navWrapper">
          <ul className="navLinksWrapper">
            <li className="navLink">
              <a className="link">Find Passion</a>
            </li>
            <li className="navLink">
              <a className="link">Categories</a>
            </li>
            <li className="navLink">
              <a className="link">Skills</a>
            </li>
            <li className="navLink">
              <a className="link">Customer</a>
            </li>
          </ul>
        </nav>
        <div className="loginWrapper"> login </div>
      </header>
      <section className="heroSection">
        <div className="titleWrapper">
          <h1 className="title">Watch. Learn. Grow</h1>
          <InputButton />
        </div>
        <div className="cardsWrapper">
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
      </section>
      <section className="coursesWrapper">
        <div className="coursesTitleWrapper">
          <h2 className="coursesTitle"></h2>
          <ul className="coursesCategories">
            <li>All categories</li>
            <li>Entertainment</li>
            <li>Lifestyle</li>
            <li>Writing</li>
            <li>Business</li>
            <li>Food</li>
          </ul>
        </div>
        <div className="courseCardsWrapper">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
      <section className="infoWrapper">
        <div className="infoTitleWrapper">
          <div className="infoTitle"></div>
          <div className="infoDescriptionWrapper">
            <div className="infoDescriptionText"></div>
            <div className="infoDescriptionNumbers"></div>
          </div>
        </div>
        <div className="infoContentWrapper">
          <div className="infoSkillsWrapper">
            <div className="infoSkill">
              <div className="skillIconWrapper">
                <div className="skillIcon"></div>
              </div>
              <div className="skillTitle"></div>
              <div className="skillDescription"></div>
            </div>
            <div className="videoWrapper">
              <video></video>
              <button> soy un botón</button>
            </div>
          </div>
        </div>
      </section>
      <section className="carrouselWrapper">
        <div className="carrouselTitle"></div>
        <div className="carrouselCardsWrapper">
          <CarrouselCard />
          <CarrouselCard />
          <CarrouselCard />
          <CarrouselCard />
          <CarrouselCard />
          <CarrouselCard />
          <CarrouselCard />
        </div>
        <div className="carrouselArrowsWrapper">
          <div className="arrowLeft"></div>
          <div className="arrowRight"></div>
        </div>
      </section>
      <footer className="footerWrapper">
        <div className="logoWrapper"> logo (imagen) </div>
        <nav className="navWrapper">
          <ul className="navLinksWrapper">
            <li className="navLink">
              <a className="link">Find Passion</a>
            </li>
            <li className="navLink">
              <a className="link">Categories</a>
            </li>
            <li className="navLink">
              <a className="link">Skills</a>
            </li>
            <li className="navLink">
              <a className="link">Customer</a>
            </li>
          </ul>
        </nav>
        <div className="loginWrapper">
          <h4>joinm our community</h4>
          <InputButton />
        </div>
        <div className="socialWrapper">
          <div className="rightsWrapper">
            <div className="rightslogo"></div>
            <div className="rightsContent"></div>
          </div>
          <nav className="socialLinksWrapper">
            <ul className="socialLinks">
              <li className="socialLink">
                <a></a>
              </li>
              <li className="socialLink">
                <a></a>
              </li>
              <li className="socialLink">
                <a></a>
              </li>
              <li className="socialLink">
                <a></a>
              </li>
              <li className="socialLink">
                <a></a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
