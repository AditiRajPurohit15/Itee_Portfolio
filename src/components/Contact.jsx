function Contact() {
  return (
    <section id="contact" className="bg-[#1C1A1A] py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#F4C430] mb-8">Contact Me</h2>

        <p className="text-gray-400 mb-8">
          Let’s build scalable and high-performing web systems together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#F4C430] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D4A017] transition">
            Email Me
          </button>

          <button className="border border-[#F4C430] text-[#F4C430] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-black transition">
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;