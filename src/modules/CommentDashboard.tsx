import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from "../components/Rating"
import { getReviews } from '../api/ReviewApi'
import { Comment, Review } from '../Types'
import ReviewCard from '../components/ReviewCard'
import CommentCard from '../components/CommentCard'


type Props = {
  isDetailsView: boolean,
  updateComment: (id: string, comment: Comment) => void,
  deleteComment: (id: string) => void
  reviews: null | Review[]
}

export default function CommentDashboard(props: Props) {

  let params = useParams()
  const [review, setReview] = useState<Review>({ id: '', author: '', place: '', published_at: '', rating: 1, content: '' })

  useEffect(() => {
    if (props.reviews) {
      props.reviews.forEach(reviewDetails => {
        if (reviewDetails.id == params.id) {
          setReview(reviewDetails)
        }
      });
    }
  }, [props.reviews]);



  return (
    <>
      <ReviewCard review={review} isDetailsView={true} />
      <CommentCard reviewId={review.id} comment={review.comment} updateComment={props.updateComment} deleteComment={props.deleteComment} />
    </>
  )
}