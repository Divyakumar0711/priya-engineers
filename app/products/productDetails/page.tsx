"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
  // Later replace this with real dynamic data based on slug
  const searchParams = useSearchParams();

  return (
    <div className="font-sans">
      <section className="px-6 pt-10 pb-4 max-w-7xl mx-auto mt-10 ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-wider">
          Shaft
        </h1>
      </section>{" "}
      <section className="px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/productTest.png"
            alt="Product Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-md shadow"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-700 mb-6 text-xl tracking-wide">
            The worm reduction gearbox is ideal for heavy-duty applications
            requiring torque multiplication. It offers high performance,
            durability, and smooth operation even under extreme conditions.
          </p>
          <a
            href="#"
            className="text-blue-900 hover:underline font-medium hover:text-red-700 tracking-wide"
          >
            Download Catalogue
          </a>
        </div>
      </section>
      {/* Specifications */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto tracking-wide">
          <h2 className="text-2xl text-red-700 font-semibold mb-6">
            Technical Specifications
          </h2>
          <table className="w-full text-left table-auto border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border">Parameter</th>
                <th className="p-3 border">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Material</td>
                <td className="p-3 border">Cast Iron</td>
              </tr>
              <tr>
                <td className="p-3 border">Input Speed</td>
                <td className="p-3 border">1500 RPM</td>
              </tr>
              <tr>
                <td className="p-3 border">Ratio</td>
                <td className="p-3 border">30:1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Features */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-red-700">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Compact and robust design</li>
          <li>High torque output</li>
          <li>Maintenance-friendly</li>
          <li>Long operational life</li>
        </ul>
      </section>
      {/* Views */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Image
            src="/assets/images/productTest.png"
            alt="View 1"
            width={400}
            height={300}
            className="rounded shadow"
          />
          <Image
            src="/assets/images/productTest.png"
            alt="View 2"
            width={400}
            height={300}
            className="rounded shadow"
          />
          <Image
            src="/assets/images/productTest.png"
            alt="Drawing"
            width={400}
            height={300}
            className="rounded shadow"
          />
          <Image
            src="/assets/images/productTest.png"
            alt="Drawing"
            width={400}
            height={300}
            className="rounded shadow"
          />
        </div>
      </section>
      {/* Quote Form */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-red-700">
            Request a Quote
          </h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 border rounded w-full"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 border rounded md:col-span-2 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-red-700 md:col-span-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
