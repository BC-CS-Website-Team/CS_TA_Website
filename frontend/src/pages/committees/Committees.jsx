const Committees = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          CS TA Program Committees
        </h1>
        <p className="text-gray-600">
          The CS Program at Berea College is organized into specialized committees,
          each focused on different aspects of computer science education and professional
          development. These committees work together to create a comprehensive and inclusive
          learning environment for all students.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Committee Structure
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Each committee has specific goals and initiatives aligned with the program's mission</li>
            <li>Committees meet regularly to plan and implement their activities</li>
            <li>TAs can participate in multiple committees based on their interests</li>
            <li>Each committee is open for any student to join</li>
            <li>Committees collaborate on cross-functional projects and events</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Committees;
