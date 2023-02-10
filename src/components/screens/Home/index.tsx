import { Introduction } from './Introduction'
import { Skill } from './Skill'
import { Project } from './Project'
import { Contact } from './Contact'
import { HomeLayout } from '@components/common/layout/home'

export const HomeScreen = () => {
  return (
    <HomeLayout>
      <main id="main">
        <section className="hero">
          <Introduction />
        </section>
        <section id="skill" className="skills">
          <Skill />
        </section>
        <section id="project" className="projects">
          <Project />
        </section>
        <section id="contact" className="contact bg-less-dark">
          <Contact />
        </section>
      </main>
    </HomeLayout>
  )
}
