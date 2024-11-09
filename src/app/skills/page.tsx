import React from "react";

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git',
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
