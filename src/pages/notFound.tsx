import { Button } from 'components/UI/button'
import { PageHero } from 'components/UI/pageHero'
import notFoundImg from 'images/404.png'

const NotFound = () => {
  return (
    <section>
      <PageHero>Not Found</PageHero>
      <div className="main-container flex flex-col items-center">
        <img alt="The page you requested was not found" src={notFoundImg} />
        <Button className="font-josefin-sans" link={true} linkTo="/">
          Back to home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
