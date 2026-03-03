function Experience() {
  return (
    <section id="experience" className="bg-[#1C1A1A] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F4C430] mb-12">Experience</h2>

        <div className="space-y-8">

          <div className="bg-[#262424] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">IMS Group</h3>
            <p className="text-gray-400">Aug 2024 - Present</p>
            <ul className="text-gray-400 mt-4 list-disc ml-6 space-y-2">
              <li>Improved UI performance by 20–25%</li>
              <li>Built REST APIs reducing manual work by 30%</li>
              <li>Integrated Salesforce & Jobscience CRM</li>
            </ul>
          </div>

          <div className="bg-[#262424] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">IT Spark Technology</h3>
            <p className="text-gray-400">Apr 2023 - Aug 2024</p>
            <ul className="text-gray-400 mt-4 list-disc ml-6 space-y-2">
              <li>Converted Figma designs into responsive UI</li>
              <li>Reduced layout bugs by 30%</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;