import Image, { StaticImageData } from "next/image"
import { StyledArticle } from "./styles"

interface Props {
  titleImg: string
  title: string
  bgImg: StaticImageData
  description: string
}

const WalkthroughCard = ({ titleImg, bgImg, title, description }: Props) => {
  return (
    <StyledArticle className='card'>
      <div aria-hidden='true' className='top__img'>
        <Image src={bgImg} alt='' />
      </div>
      <div className='info'>
        <h3>
          <span aria-hidden='true' className='span__img'>
            <Image src={titleImg} width='32' height='32' alt='' />
          </span>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </StyledArticle>
  )
}

export default WalkthroughCard
