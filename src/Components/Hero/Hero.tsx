import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Welcome To ShopMart
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover the latest technology, fashion, and lifestyle products.
            Quality guaranteed with fast shipping and excellent customer
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 min-w-35"
            >
              Shop Now
            </Link>
            <Link
              href="/categories"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200 min-w-35"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
