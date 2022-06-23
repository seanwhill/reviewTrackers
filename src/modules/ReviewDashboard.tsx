import React from 'react'
import { Outlet } from 'react-router-dom';
import { Review } from '../Types';
import ReviewCard from '../components/ReviewCard';

type Props = {
  reviews: null | Review[]
}

export default function ReviewDashboard(props: Props) {

  return (
    <div className='flex flex-wrap mx-10 my-10'>
      {props.reviews != null && props.reviews.map((review) => <ReviewCard key={review.id} isDetailsView={false} review={review}></ReviewCard>)}
      <Outlet />
    </div>
  )
}