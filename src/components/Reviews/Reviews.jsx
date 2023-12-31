import { getMovieReviews } from "components/Api/api";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams(null);

     useEffect(() => {
       const getReviewsById = async () => {
         try {
           setIsLoading(true);
           const data = await getMovieReviews(id);
           const reviews = data.results;
           if (reviews.length === null) {
             return Notify.failure('Oops! Something went wrong!');
           }
           setReviews(reviews);
         } catch (error) {
           setError(true);
           console.error(error);
         } finally {
           setIsLoading(false);
         }
       };
       getReviewsById();
     }, [id]);
    
    return (
      <div>
        {isLoading}
        {error && <p>Oops! Something went wrong!</p>}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>Athor: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
}
export default Reviews