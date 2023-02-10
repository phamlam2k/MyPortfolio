/* eslint-disable react/no-unescaped-entities */

export const Introduction = () => {
  return (
    <div className="wrapper hero__wrapper bottom-border">
      <div className="hero__content">
        <picture>
          <source media="(min-width: 62.5em)" srcSet="/assets/images/avatar_justin.png" />
          <source media="(min-width: 37.5em)" srcSet="/assets/images/avatar_justin.png" />
          <img
            className="hero__image"
            src="/assets/images/avatar_justin.png"
            alt="picture of Adam Keyes"
            width-="174"
            height="383"
          />
        </picture>
        <img className="hero__rings" src="/assets/images/pattern-rings.svg" alt="" width="530" height="129" />
        <img className="hero__circle" src="/assets/images/pattern-circle.svg" alt="" width="129" height="129" />
        <div className="hero__text">
          <h1 className="hero__headline header-xl">
            Nice to meet you! I'm <span>Lam Pham</span>.
          </h1>
          <p className="hero__description">
            Based in the VN, I'm a front-end developer passionate about building accessible web apps that users love.
          </p>
          <a href="#contact" className="hero__contact underline">
            Contact me
          </a>
        </div>
      </div>
    </div>
  )
}
