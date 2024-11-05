import { notFound } from "next/navigation";

type paramsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};
export default function ReviewDetails({ params }: paramsType) {
  if (Number(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review details of Product {params.productId} with review id{" "}
        {params.reviewId}
      </h1>
    </>
  );
}
