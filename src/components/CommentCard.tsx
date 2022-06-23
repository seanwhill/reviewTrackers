import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from "./Rating"
import { getReviews } from '../api/ReviewApi'
import { Comment, Review } from '../Types'
import ReviewCard from './ReviewCard'
import DropDownMenu from './DropDownMenu'
import { Console } from 'console'
import { getFormattedDate } from '../util/DateUti'


type Props = {
  comment: Comment | undefined
  reviewId: string
  deleteComment: (id: string) => void
  updateComment: (id: string, comment: Comment) => void
}

export default function CommentCard(props: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [comment, setComment] = useState<string>("")


  useEffect(() => {
    if (props.comment) {
      setComment(props.comment.content);
    }
  }, [props.comment]);

  let edit = () => {
    setIsEdit(true)
  }

  let createComment = () => {
    setIsEdit(false)
    props.updateComment(props.reviewId, { author: "Sean Hill", published_at: new Date(), content: comment })
  }

  let deleteComment = () => {
    setComment("") //Clear the comment on the current componenet
    props.deleteComment(props.reviewId)
  }

  return (
    <>
      <div className='max-w-full rounded shadow-lg bg-white flex flex-col mx-24 pb-2'>
        <div className="text-left px-10 py-4">
          {props.comment && !isEdit ?
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-6 h-5 w-5" viewBox="0 0 20 20" fill="blue">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div className={`inline-block text-gray-700 text-base`}>
                {props.comment.content}
              </div>
              <div className="relative inline-block text-left float-right">
                <DropDownMenu edit={edit} delete={deleteComment} />
              </div>
            </>
            : <textarea value={comment} className="w-11/12 ml-6 mr-14 px-3 py-3" rows={3} id="comment" name="comment" placeholder="Please Enter A Comment" onChange={(e) => setComment(e.target.value)} />
          }
        </div>
        {props.comment && !isEdit ?
          <div className='ml-10 px-10'>
            <div className='author mr-4 float-left text-left inline-block'>
              {props.comment.author}
            </div>
            <div className='date float-left inline-block'>
              {getFormattedDate(props.comment.published_at)}
            </div>
          </div>
          :
          <div className='ml-16'>
            <button className="float-left mx-3 px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded" onClick={createComment}>Comment</button>
          </div>
        }
      </div>
    </>
  )
}

