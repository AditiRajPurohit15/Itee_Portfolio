import duda from '../assets/icons/duda.png'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },

    // 🔥 Newly Added
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
    {
  name: "Duda",
  icon: <img src={duda} alt="Duda" className="w-8 h-8 object-contain" />,
},
  ];

  return (
    <section className="bg-[#1C1A1A] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F4C430]">
            What I Do
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, modern web applications.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#111111] rounded-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">

          {/* Left Vertical Skills Label */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 rotate-[-90deg] hidden md:block">
            <span className="text-[#F4C430] tracking-widest text-lg font-bold">
              SKILLS
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-[#1A1A1A] p-6 rounded-xl flex flex-col items-center justify-center
                           shadow-md
                           transition-all duration-300 ease-out
                           hover:-translate-y-1
                           hover:shadow-[0_8px_20px_rgba(244,196,48,0.15)]
                           hover:bg-[#1F1F1F]"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-105">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;