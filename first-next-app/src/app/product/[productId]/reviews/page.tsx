type paramsType = {
  params: {
    productId: string;
  };
};
export default function ReviewList({ params }: paramsType) {
  return (
    <>
      <h1>Reviews List of Product {params.productId}</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
      <h2>Review 4</h2>
    </>
  );
}
