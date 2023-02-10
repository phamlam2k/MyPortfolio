import { ListContact } from '../ListContact'
import { Footer } from '../footer'
import { Header } from '../header'

interface Props {
  children: any
}

export const HomeLayout = (props: Props) => {
  const { children } = props

  return (
    <div className="app">
      <ListContact />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
