export default function Process() {
  const steps = [
    "Free diagnostic session",
    "Identify weak SAT math areas",
    "Personalized tutoring plan",
    "Weekly 1-on-1 lessons",
    "Practice tests and score tracking",
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        How the Tutoring Works
      </h2>

      <ul className="space-y-4">
        {steps.map((step, i) => (
          <li key={i} className="bg-blue-50 p-4 rounded-lg">
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
}
