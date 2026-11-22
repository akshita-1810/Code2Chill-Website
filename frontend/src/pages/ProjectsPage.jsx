
import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'CampusConnect',
    category: 'Web Development',
    description:
      'A platform designed to connect students and simplify campus communication.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'FastAPI'],
    status: 'Completed',
  },
  {
    id: 2,
    name: 'AI Study Assistant',
    category: 'Artificial Intelligence',
    description:
      'An intelligent study companion that helps students learn more effectively.',
    technologies: ['Python', 'Machine Learning', 'React'],
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'Smart Task Manager',
    category: 'App Development',
    description:
      'A productivity application to organise tasks and manage daily goals.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'Completed',
  },
]

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter projects using the selected category and search text
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category === selectedCategory

    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )

    return matchesCategory && matchesSearch
  })

  return (
    <section className="projects-page">

      {/* Page Heading */}
      <div className="projects-heading">
        <p className="section-label">BUILT BY CODE2CHILL</p>

        <h1>
          Ideas Into <span>Reality.</span>
        </h1>

        <p>
          Explore the projects, experiments and innovations
          created by our community.
        </p>
      </div>

      {/* Search Bar */}
      <div className="project-search-wrapper">
        <input
          type="text"
          placeholder="Search projects, technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="project-search"
        />
      </div>

      {/* Category Filters */}
      <div className="project-filters">
        {[
          'All',
          'Web Development',
          'Artificial Intelligence',
          'App Development',
        ].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>

              <span className="project-category">
                {project.category}
              </span>

              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>{project.status}</span>

                <button
                  onClick={() => setSelectedProject(project)}
                >
                  View Project →
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className="no-projects">
            <h3>No projects found!</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>

      {/* Project Details Popup */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="section-label">PROJECT DETAILS</p>

            <span className="project-category">
              {selectedProject.category}
            </span>

            <h2>{selectedProject.name}</h2>

            <p className="project-modal-description">
              {selectedProject.description}
            </p>

            <h3>Technologies Used</h3>

            <div className="project-tech">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-modal-status">
              <span>Status</span>
              <strong>{selectedProject.status}</strong>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default ProjectsPage
