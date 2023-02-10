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
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-1-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-1-small.webp"
              alt="screenshot of design portfolio website"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Design Portfolio</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-2-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-2-small.webp"
              alt="screenshot of learning platform website with different courses"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">E-Learning Landing Page</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-3-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-3-small.webp"
              alt="screenshot of To Do App showing a list of active and complete tasks"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Todo Web App</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-4-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-4-small.webp"
              alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Entertainment Web App</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-5-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-5-small.webp"
              alt="screenshot of 4-player memory game with circular tiles that have symbols"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Memory Game</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/assets/images/thumbnail-project-6-large.webp" />
            <img
              className="projects__image"
              src="/assets/images/thumbnail-project-6-small.webp"
              alt="grid of thumbnails of famous works of art"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Art Gallery Showcase</h3>
          <p className="projects__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </p>
          <div className="projects__links">
            <a href="" className="underline">
              View Project
            </a>
            <a href="" className="underline">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
