import heroImage from "../assets/images/Portfolio.png";

function Hero() {
  return (
    <section className="min-h-screen bg-[#1C1A1A] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="space-y-6 text-center md:text-left">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-[#F4C430]">Itee Rajpurohit</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
              Full Stack Developer building scalable React & API-driven systems
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
              3+ years of experience delivering high-performance web applications,
              CRM-integrated systems, and optimized frontend architectures.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              
              <button className="bg-[#F4C430] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D4A017] transition duration-300">
                View My Work
              </button>

              <button className="border border-[#F4C430] text-[#F4C430] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-black transition duration-300">
                Download Resume
              </button>

            </div>

          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="flex justify-center relative">
            
            {/* Glow Effect Behind Image */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#F4C430] opacity-20 blur-3xl rounded-full"></div>

            <img
              src={heroImage}
              alt="Itee Cartoon"
              className="relative w-72 md:w-96 drop-shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;