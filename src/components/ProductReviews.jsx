const ProductReviews = ({ reviews }) => {

  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review, index) => (
        <div key={index} className="p-4 border rounded-xl shadow-md bg-white">
          <p className="text-lg font-medium">{review.user}</p>
          <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
          <div className="text-yellow-500">
            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;