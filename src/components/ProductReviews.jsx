
const ProductReviews = ({reviews}) => {
   
  return (
    <div>
        {reviews.map((review,index)=>(
             <div key={index} className="p-4 border rounded-xl shadow-md bg-white">
             <p className="text-lg font-medium">{review.user}</p>
             <p className="text-sm text-gray-600">{review.comment}</p>
             <div className="text-yellow-500">
               {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
             </div>
           </div>
        )

        )}

    </div>
  )
}

export default ProductReviews