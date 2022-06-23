import './App.css';
import Navbar from "./components/Navbar"
import { useCallback, useEffect, useState } from 'react';
import { getReviews } from './api/ReviewApi'
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";
import ReviewDashboard from './modules/ReviewDashboard';
import ReviewCard from './components/ReviewCard';
import { Comment, Review } from './Types';
import CommentDashboard from './modules/CommentDashboard';


function App() {

  const [reviews, setReviews] = useState<null | Review[]>(null);


  useEffect(() => {
    let x = getReviews()
    setReviews(x);

  }, []);

  let createComment = (id: string, comment: Comment) => {
    if (reviews) {
      let updatedReviews = reviews.map(el => (el.id === id ? { ...el, comment } : el))
      setReviews(updatedReviews)
    }
  }

  let deleteComment = (id: string) => {
    if (reviews) {
      let updatedReviews = reviews.map(el => (el.id === id ? { ...el, comment: undefined } : el))
      setReviews(updatedReviews)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews" />} />
        <Route path="reviews" element={<ReviewDashboard reviews={reviews} />} />
        <Route path="reviewDetails/:id" element={<CommentDashboard reviews={reviews} isDetailsView={true} updateComment={createComment} deleteComment={deleteComment} />} />
        <Route
          path="*"
          element={
            <Navigate to="/reviews" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
