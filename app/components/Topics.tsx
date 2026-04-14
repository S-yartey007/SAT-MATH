export default function Topics() {
  const topics = [
    "Algebra",
    "Advanced Math",
    "Problem Solving & Data Analysis",
    "Geometry",
    "Trigonometry",
    "SAT Calculator Techniques",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        SAT Math Topics Covered
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <div
            key={topic}
            className="p-6 bg-white rounded-lg shadow text-center"
          >
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
}
