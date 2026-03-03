function Experience() {
  return (
    <section id="experience" className="bg-[#1C1A1A] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#F4C430]">
            Experience
          </h2>
          <div className="w-20 h-[2px] bg-[#F4C430] mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="relative bg-[#181818] p-8 rounded-2xl 
                          border border-[#F4C430]/10
                          shadow-md
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:border-[#F4C430]/30
                          hover:shadow-[0_10px_25px_rgba(244,196,48,0.12)]">

            {/* Golden Accent Bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#F4C430] rounded-l-2xl"></div>

            <h3 className="text-xl font-semibold">
              IMS Group
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              Aug 2024 – Present
            </p>

            <ul className="text-gray-400 mt-6 space-y-3 text-sm leading-relaxed">
              <li>• Improved UI performance by 20–25%</li>
              <li>• Built REST APIs reducing manual work by 30%</li>
              <li>• Integrated Salesforce & Jobscience CRM systems</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#181818] p-8 rounded-2xl 
                          border border-[#F4C430]/10
                          shadow-md
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:border-[#F4C430]/30
                          hover:shadow-[0_10px_25px_rgba(244,196,48,0.12)]">

            {/* Golden Accent Bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#F4C430] rounded-l-2xl"></div>

            <h3 className="text-xl font-semibold">
              IT Spark Technology Pvt. Ltd.
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              Apr 2023 – Aug 2024
            </p>

            <ul className="text-gray-400 mt-6 space-y-3 text-sm leading-relaxed">
              <li>• Converted Figma designs into responsive UI components</li>
              <li>• Reduced layout bugs by 30%</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;