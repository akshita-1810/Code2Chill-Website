
const coreMembers = [
  { name: 'Jiya Arora', role: 'Core Member', initials: 'JA' },
  { name: 'Divyana Garg', role: 'Core Member', initials: 'DG' },
  { name: 'Hunar Mehndiratta', role: 'Core Member', initials: 'HM' },
  { name: 'Tamanna Kakkar', role: 'Content Head', initials: 'TK' },
  { name: 'Samanyu Thakur', role: 'Technical Head', initials: 'ST' },
]

function Team() {
  return (
    <section className="team-section">

      <div className="team-heading">
        <p className="section-label">MEET OUR TEAM</p>

        <h1>
          Meet the Minds Behind the <span>Code.</span>
        </h1>

        <p>
          The people bringing ideas to life, building communities,
          and driving innovation at Code2Chill.
        </p>
      </div>

      <div className="leader-card">
       <div className="member-avatar">LK</div>

        <div className="member-details">
          <h2>Lakshay Kalra</h2>
          <h3>Club Leader</h3>
          <p>lakshay1154.becse25@chitkara.edu.in</p>
        </div>
      </div>

      <div className="core-team">
        <h2>CORE TEAM</h2>

        <div className="team-grid">
          {coreMembers.map((member) => (
            <div className="team-card" key={member.initials}>
              <div className="member-avatar">
                {member.initials}
              </div>

              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="team-tagline">
        ONE CLUB • MANY MINDS • ENDLESS POSSIBILITIES
      </p>

    </section>
  )
}

export default Team
