
import { useState } from 'react'

function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    year: '',
    interest: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for your interest in Code2Chill!')
  }

  return (
    <section className="join-page">
      <div className="join-heading">
        <p className="section-label">BECOME A PART OF US</p>
        <h1>
          Your Journey Starts <span>Here.</span>
        </h1>
        <p>
          Have ideas, curiosity, and a passion for technology?
          Join Code2Chill and turn your ideas into reality.
        </p>
      </div>

      <form className="join-form" onSubmit={handleSubmit}>
        <h2>Join the Community</h2>
        <p>Tell us a little about yourself.</p>

        <label>Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label>University Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Course</label>
        <input
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g. B.Tech CSE"
          required
        />

        <label>Year of Study</label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        >
          <option value="">Select your year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        
<label>Area of Interest</label>
<select
  name="interest"
  value={formData.interest}
  onChange={handleChange}
  required
>
  <option value="">Choose your team</option>
  <option value="Technical Team">Technical Team</option>
  <option value="Graphics and UI">Graphics and UI</option>
  <option value="Organising Team">Organising Team</option>
  <option value="Promotional and Outreach Team">
    Promotional and Outreach Team
  </option>
  <option value="Social Media and Content Team">
    Social Media and Content Team
  </option>
</select>

        <button type="submit">Submit Application →</button>
      </form>
    </section>
  )
}

export default JoinPage

