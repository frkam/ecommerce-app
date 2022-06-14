import React from "react"
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"

export const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  let hundreds = +(rating - +Math.floor(rating)).toFixed(2)

  if (hundreds > 0.5) {
    hundreds = 1
  } else if (hundreds < 0.5) {
    hundreds = 0
  } else {
    hundreds = 0.5
  }

  let starsCount = Math.floor(rating) + hundreds

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (starsCount >= 1) {
      stars.push(<IoIosStar className="text-stars-filled" />)
      starsCount -= 1
    } else if (starsCount === 0.5) {
      stars.push(<IoIosStarHalf className="text-stars-filled" />)
      starsCount -= 0.5
    } else {
      stars.push(<IoIosStarOutline className="text-stars-outlined" />)
    }
  }

  return (
    <React.Fragment>
      {stars.map((star, i) => {
        return <React.Fragment key={i}>{star}</React.Fragment>
      })}
    </React.Fragment>
  )
}
