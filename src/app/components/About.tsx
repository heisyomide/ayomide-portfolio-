const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
        About Me
      </h2>
      <p className="text-center text-gray-300 mb-12">
        Hi! I'm Ayomide, a passionate developer who loves creating modern,
        performant, and visually stunning web applications.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Personal Details
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Birthdate:</strong> 28th Dec</li>
            <li><strong>Phone:</strong> +234 915 160 2921</li>
            <li><strong>Email:</strong> ayomidekofoworola59@gmail.com</li>
            <li><strong>Location:</strong> Lagos, Nigeria</li>
            <li><strong>Status:</strong> <span className="text-teal-400">Freelance</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Games", "Music", "Travel", "Coding", "Cars", "Coffee"].map(
              (interest) => (
                <div
                  key={interest}
                  className="bg-gray-800 py-3 px-4 text-center rounded-lg hover:bg-gray-700 transition"
                >
                  {interest}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <a
          href="/Ayomide_Kofoworola_CV.pdf"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;