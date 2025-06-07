import HeroSection from "@/components/HeroSection";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>
      {/* Welcome Section - Like Gamma Gears "18 Year Experience" */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-blue-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Welcome to Priya Engineers
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Priya Engineers where revolution meets accuracy in the
                  dominion of industrialized engineering. As a leading
                  engineering manufacturer and supplier of high-quality
                  mechanical components, Priya Engineers specialize in a wide
                  range of industrial engineering products designed to fulfil
                  the diverse requirements of several industries. Priya
                  Engineers expertise extends across the manufacturing of
                  precision engineering products, measuring instruments,
                  automation systems and more. All of these our engineering
                  manufacturers products are comprehensively used for being
                  strong, corrosion resistant, stable performance, capability to
                  tolerate load, ease to function and dimensionally correct.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <div className="text-8xl lg:text-9xl font-bold text-blue-100 leading-none">
                  25
                </div>
                <h2 className="text-4xl font-bold text-gray-900 -mt-4">
                  Year Experience In This Industry
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our engineers are committed to deliver optimal performance,
                durability, and efficiency. Priya Engineers understand the
                significant role these components work in the smooth function of
                machinery and industrial procedures, which is why Priya
                Engineers keep the latest technologies and strict quality
                control measures in our manufacturing process.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a dedicated team of engineers manufacturing engineers and
                advanced manufacturing facilities, Priya Engineers confirm that
                engineers manufacturers products with highest standards of
                excellence and consistency.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Priya Engineers innovative engineering products are durable with
                an enduring functional life. Our company is firmly followed to
                certain compulsory engineering inspection and production
                methods, which frequently contribute us success in the business
                to offer excellent products that meet the precise requirements
                of our clients, wherever they are located.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - 4 Main Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Priya Engineers specializes in four main categories of precision
              engineering products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 rounded-full p-8 mb-6 group-hover:bg-blue-100 transition-colors">
                {/* <Cog className="h-16 w-16 text-blue-600 mx-auto" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Precision Tools
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-precision engineering tools designed for accuracy and
                reliability in industrial applications.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-orange-50 rounded-full p-8 mb-6 group-hover:bg-orange-100 transition-colors">
                {/* <Gauge className="h-16 w-16 text-orange-600 mx-auto" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Measuring Instruments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced measuring and testing equipment for quality control and
                precision measurement.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-50 rounded-full p-8 mb-6 group-hover:bg-green-100 transition-colors">
                {/* <Wrench className="h-16 w-16 text-green-600 mx-auto" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industrial Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Robust industrial machinery and equipment for manufacturing and
                production processes.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-50 rounded-full p-8 mb-6 group-hover:bg-purple-100 transition-colors">
                {/* <Settings className="h-16 w-16 text-purple-600 mx-auto" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Automation Systems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art automation solutions for modern manufacturing
                and industrial processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our engineering solutions serve diverse industries across India
              and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Factory className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Manufacturing</h4>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Car className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Automotive</h4>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Plane className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Aerospace</h4>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Zap className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Energy</h4>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Building className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Construction</h4>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <Hammer className="h-12 w-12 text-blue-600 mx-auto mb-3" /> */}
                <h4 className="font-semibold text-gray-900">Heavy Industry</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch With Us</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Ready to discuss your engineering needs? Contact our expert team
                today for personalized solutions and competitive quotes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  {/* <Phone className="h-6 w-6 text-orange-400 mr-4" /> */}
                  <span className="text-lg">+91-9825790413</span>
                </div>
                <div className="flex items-center">
                  {/* <Mail className="h-6 w-6 text-orange-400 mr-4" /> */}
                  <span className="text-lg">priyaengineersand@gmail.com</span>
                </div>
                <div className="flex items-start">
                  {/* <MapPin className="h-6 w-6 text-orange-400 mr-4 mt-1" /> */}
                  <span className="text-lg">Gujarat, India</span>
                </div>
              </div>

              {/* <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-md">
                  Contact With Us
                </Button>
              </Link> */}
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200"
                />
                {/* <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200"
                ></textarea>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold">
                  Send Message
                </Button> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
