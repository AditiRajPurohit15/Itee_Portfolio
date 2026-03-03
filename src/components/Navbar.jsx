function Navbar() {
  return (
    <nav className="fixed w-full bg-[#1C1A1A]/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#F4C430] font-bold text-xl">Itee.dev</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-[#F4C430]">About</a></li>
          <li><a href="#experience" className="hover:text-[#F4C430]">Experience</a></li>
          <li><a href="#projects" className="hover:text-[#F4C430]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#F4C430]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;