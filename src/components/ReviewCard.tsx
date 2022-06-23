import { Link, useParams } from 'react-router-dom'
import Rating from "./Rating"
import { Review } from '../Types'
import { getFormattedDate, stringToDate } from '../util/DateUti'

type Props = {

  isDetailsView: boolean;
  review: Review

}

export default function ReviewCard(props: Props) {

  return (
    <Link
      to={`/reviewDetails/${props.review.id}`}
    >
      <div className={`review-card${props.isDetailsView ? '-details' : ' '} max-w-xs rounded shadow-lg bg-white flex flex-col mx-10 my-10`}>
        <div className="text-left px-4 py-4">
          <div className="font-bold text-xl mb-2">{props.review.place}</div>
          <div className="font-bold text-xl mb-4"><Rating numStars={5} fullStars={props.review.rating} /></div>
          <p className={`card-body${props.isDetailsView ? '-details' : ' '} text-gray-700 text-base`}>
            {props.review.content}
          </p>
        </div>
        <div className="text-left px-4 pt-4 pb-2">
          <span className="author mr-4">{props.review.author}</span>
          <span className="date text-gray-400 mr-4">{getFormattedDate(stringToDate(props.review.published_at))}</span>
          {props.isDetailsView || !props.review.comment ? null :
            <span className="inline-block float-right">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="blue">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </span>}
        </div>
      </div>
    </Link>
  )
}