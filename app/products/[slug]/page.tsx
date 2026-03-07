import { notFound } from "next/navigation";

interface Product {
  title: string;
  slug: string;
  description: string;
  image?: string;
  specs?: Record<string, string | number | boolean>;
  features?: Record<string, string | number | boolean>;
}

async function getProduct(slug: string): Promise<Product | null> {
  const products: Product[] = [
    {
      title: "Transmission Shaft",
      slug: "transmission-shaft",
      description: "Heavy duty transmission shaft for industrial machinery",
      specs: {
        Material: "Alloy Steel",
        Diameter: "50mm",
        Length: "1200mm",
      },
      features: {
        Precision: "High accuracy machining",
        Durability: "Long service life",
      },
    },
  ];

  return products.find((p) => p.slug === slug) ?? null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[rgb(78,100,141)]">
        {product.title}
      </h1>

      <p className="mt-4 text-gray-700">{product.description}</p>

      {product.features && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[rgb(225,6,0)] mb-4">
            Features
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {Object.entries(product.features).map(([key, value]) => (
              <li key={key}>
                {key}: {String(value)}
              </li>
            ))}
          </ul>
        </section>
      )}

      {product.specs && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[rgb(78,100,141)] mb-4">
            Specifications
          </h2>

          <table className="border w-full">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <td className="border p-3 font-medium">{key}</td>
                  <td className="border p-3">{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}