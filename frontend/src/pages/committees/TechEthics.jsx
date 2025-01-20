const TechEthics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tech Ethics Committee
        </h1>
        <p className="text-gray-600">
          The Tech Ethics Committee is a monthly discussion forum dedicated to exploring emerging technologies and
          their social impact. We foster meaningful conversations that examine the ethical considerations inherent
          in technological advancements, addressing issues such as privacy, equity, sustainability, and autonomy.
          Our goal is to create a space where students can explore, debate, and understand the complex relationships
          between technology and human values.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Committee Goals
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Organize monthly discussion sessions on emerging technology topics</li>
            <li>Promote awareness of ethical considerations in technology development</li>
            <li>Foster critical thinking about technology's impact on society</li>
            <li>Build connections between technical skills and ethical responsibility</li>
            <li>Engage with broader tech ethics community and initiatives</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Recent Discussion Topics
          </h2>
          <ul className="space-y-4">
            <li className="text-gray-600">
              <span className="font-semibold">Artificial Intelligence Ethics</span> - Exploring the ethical implications of AI
              development and deployment in society
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Privacy in the Digital Age</span> - Understanding data privacy concerns and protecting user
              rights
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Algorithmic Bias</span> - Examining fairness and bias in automated decision-making systems
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Environmental Impact of Technology</span> - Discussing sustainable tech practices and
              environmental responsibility
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Get Involved
          </h2>
          <p className="text-gray-600">
            Join our monthly discussions! We welcome all students interested in exploring the intersection of
            technology and ethics. No prior experience in ethics or technology required - just bring your curiosity
            and willingness to engage in meaningful dialogue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-2">
            For more information about upcoming discussions or to suggest topics:
          </p>
          <p className="text-gray-600">
            Email: <span className="font-semibold">jonesj2@berea.edu</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default TechEthics
