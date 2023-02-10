import { GitHubIcon, FacebookIcon, LinkedInIcon } from './CustomIcons'

export const socials = [
  {
    id: 1,
    link: 'https://github.com/phamlam2k',
    name: 'GitHub',
    svg: <GitHubIcon />,
  },
  {
    id: 2,
    link: 'https://www.facebook.com/phamlam2k',
    name: 'Facebook',
    svg: <FacebookIcon />,
  },
  {
    id: 3,
    link: 'https://www.facebook.com/phamlam2k',
    name: 'LinkedIn',
    svg: <LinkedInIcon />,
  },
]

export const ListContact = () => {
  return (
    <div className="list-contact">
      <div className="list-contact-content">
        {socials.map((social) => (
          <a target="_blank" href={social.link} key={social.id} className="header_social" rel="noreferrer">
            <div className="header_social-text">{social.name}</div>
            <div className="header_social-svg">{social.svg}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
