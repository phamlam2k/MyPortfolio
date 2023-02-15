export const Project = () => {
  return (
    <div className="wrapper projects__wrapper">
      <div className="projects__grid">
        <h2 className="projects__headline header-xl">Projects</h2>
        <a href="#contact" className="projects__contact underline">
          Contact me
        </a>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/IeltsProject.webp" />
            <img
              className="projects__image"
              src="/assets/images/IeltsProject.webp"
              alt="screenshot of design portfolio website"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Ielts Project</h3>
          <p className="projects__tags">
            <span>NextJs</span>
            <span>NodeJs</span>
            <span>Tailwind</span>
            <span>Typescript</span>
          </p>
          <div className="projects__links">
            <a href="https://ielts.lampnm.com/" className="underline" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/AmialandProject.webp" />
            <img
              className="projects__image"
              src="/assets/images/AmialandProject.webp"
              alt="screenshot of learning platform website with different courses"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Amialand Landing Page</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
          </p>
          <div className="projects__links">
            <a
              href="https://web-final-hanu.vercel.app/index.html"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/TitanHunterApp.webp" />
            <img
              className="projects__image"
              src="/assets/images/TitanHunerApp.webp"
              alt="screenshot of To Do App showing a list of active and complete tasks"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Titan Hunter App</h3>
          <p className="projects__tags">
            <span>NextJS</span>
            <span>Typescript</span>
            <span>Tailwind</span>
            <span>Web3.0</span>
          </p>
          <div className="projects__links">
            <a href="https://app.titanhunters.io/" className="underline" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/TitanHunterLandingPage.webp" />
            <img
              className="projects__image"
              src="/assets/images/TitanHunterLandingPage.webp"
              alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Titan Hunter LandingPage</h3>
          <p className="projects__tags">
            <span>Nextjs</span>
            <span>Typecript</span>
            <span>Tailwind</span>
          </p>
          <div className="projects__links">
            <a href="https://www.titanhunters.io/" className="underline" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
