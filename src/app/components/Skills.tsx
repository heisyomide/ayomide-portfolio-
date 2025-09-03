'use client'
import { motion } from 'framer-motion'

const technicalSkills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 88 },
]

const professionalSkills = [
  { name: "Communication", level: 95 },
  { name: "Creativity", level: 85 },
  { name: "Teamwork", level: 90 },
  { name: "Project Management", level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 p-6 rounded-xl"
      >
        <h2 className="text-3xl font-heading text-solarYellow mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg text-accentBlue font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="absolute top-0 left-0 h-3 bg-teal-400 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-lg text-accentBlue font-semibold mb-4">Professional Skills</h3>
            <div className="space-y-4">
              {professionalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="absolute top-0 left-0 h-3 bg-blue-400 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}