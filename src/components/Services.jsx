function Services() {
  return (
    <section className="bg-[#1C1A1A] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F4C430] mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#262424] p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Full Stack Development</h3>
            <p className="text-gray-400 mt-3">End-to-end scalable web applications.</p>
          </div>

          <div className="bg-[#262424] p-6 rounded-xl">
            <h3 className="font-semibold text-lg">API Development</h3>
            <p className="text-gray-400 mt-3">Secure and optimized REST APIs.</p>
          </div>

          <div className="bg-[#262424] p-6 rounded-xl">
            <h3 className="font-semibold text-lg">CRM Integration</h3>
            <p className="text-gray-400 mt-3">Salesforce & Jobscience integration.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;