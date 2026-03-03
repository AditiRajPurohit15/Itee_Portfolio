function Projects() {
  return (
    <section id="projects" className="bg-[#1C1A1A] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F4C430] mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#262424] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Trackilospe</h3>
            <p className="text-gray-400 mt-3">
              Symptom-based disease prediction platform using Python and ML datasets.
            </p>
          </div>

          <div className="bg-[#262424] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">TrippyTourGuide</h3>
            <p className="text-gray-400 mt-3">
              Scalable backend prototype using Node, Express & MongoDB.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;