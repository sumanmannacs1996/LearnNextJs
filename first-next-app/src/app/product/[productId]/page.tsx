type paramsType = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: paramsType) => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Products ${title}`,
  };
};

export default function ProductDetails({ params }: paramsType) {
  return (
    <>
      <h1>Details of Product {params.productId}</h1>
    </>
  );
}
