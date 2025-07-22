import productData from "@/data/productData";

export default function ProductDetailsPage({ searchParams }: { searchParams: { productId?: string } }) {
  const productId = parseInt(searchParams.productId || "", 10);
  const product = productData.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-8 text-red-500">Product not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
