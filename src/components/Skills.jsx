function Skills() {
  const skills = [
    "React.js", "Node.js", "Express", "REST APIs",
    "JavaScript", "Tailwind CSS", "MySQL",
    "JWT Auth", "Git", "Postman"
  ];

  return (
    <section className="bg-[#1C1A1A] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F4C430] mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index}
              className="bg-[#262424] p-4 rounded-xl text-center hover:bg-[#F4C430] hover:text-black transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;