import { useState } from 'react'

const events = [
  {
    id: 1,
    name: 'Code Sprint',
    category: 'Coding Competition',
    level: 'Intermediate',
    period: 'Upcoming',
    status: 'Registration Open',
    description: 'Put your coding and problem-solving skills to the test.',
  },
  {
    id: 2,
    name: 'Hackathon',
    category: 'Hackathon',
    level: 'Advanced',
    period: 'Ongoing',
    status: 'Coming Soon',
    description: 'Collaborate, innovate and build something meaningful.',
  },
  {
    id: 3,
    name: 'Tech Workshop',
    category: 'Workshop',
    level: 'Beginner',
    period: 'Past',
    status: 'Registration Open',
    description: 'Learn new technologies through practical experience.',
  },
]

function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('')
const [selectedCategory, setSelectedCategory] = useState('All')
const [selectedPeriod, setSelectedPeriod] = useState('All')
const [selectedEvent, setSelectedEvent] = useState(null)
const filteredEvents = events.filter((event) => {
  const matchesSearch =
  event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
  event.description.toLowerCase().includes(searchTerm.toLowerCase())

  const matchesCategory =
    selectedCategory === 'All' ||
    event.category === selectedCategory

  const matchesPeriod =
  selectedPeriod === 'All' ||
  event.period === selectedPeriod

  return matchesSearch && matchesCategory && matchesPeriod
})
  return (
    <section className="events-page">

      {/* Hero section */}
     
<div className="events-hero">

  <div className="events-hero-content">
    <p className="section-label">
      CODE2CHILL EVENT ARENA
    </p>

    <h1>
      Ready to Take on
      <br />
      <span>the Challenge?</span>
    </h1>

    <p>
      Compete, collaborate, learn and push your limits.
      Your next challenge starts here.
    </p>

    <a href="#event-explorer" className="arena-btn">
      Explore the Arena ↓
    </a>
  </div>

  <div className="featured-challenge">

    <div className="challenge-top">
      <span>FEATURED CHALLENGE</span>
      <span className="challenge-number">01</span>
    </div>

    <div className="challenge-visual">
      <div className="challenge-orbit">
        <div className="challenge-core">
          &lt;/&gt;
        </div>
      </div>
    </div>

    <div className="challenge-info">
      <p>YOUR NEXT MISSION</p>
      <h2>Think. Code. Conquer.</h2>
      <span>Are you ready to compete?</span>
    </div>

  </div>

</div>


      {/* Event explorer */}
      <div className="event-explorer" id="event-explorer">

        <div className="explorer-heading">
          <p className="section-label">FIND YOUR NEXT CHALLENGE</p>
          <h2>Explore the Arena</h2>
        </div>


<div className="event-controls">

  {/* SEARCH BAR */}
  <input
    type="text"
    placeholder="Search events..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="event-search"
  />

  {/* CATEGORY FILTER */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="event-category-filter"
  >
    <option value="All">All Categories</option>
    <option value="Hackathon">Hackathon</option>
    <option value="Workshop">Workshop</option>
    <option value="Coding Competition">Coding Competition</option>
    <option value="Technical Talk">Technical Talk</option>
  </select>

  {/* EVENT STATUS TABS */}
  <div className="event-period-tabs">
    {['All', 'Upcoming', 'Ongoing', 'Past'].map((period) => (
      <button
        key={period}
        className={selectedPeriod === period ? 'active' : ''}
        onClick={() => setSelectedPeriod(period)}
      >
        {period}
      </button>
    ))}
  </div>

</div>
<p className="event-result-count">
  Showing {filteredEvents.length} of {events.length} events
</p>

<div className="event-grid">


{selectedEvent && (
  <div
    className="event-modal-overlay"
    onClick={() => setSelectedEvent(null)}
  >
    <div
      className="event-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setSelectedEvent(null)}
      >
        ×
      </button>

      <p className="section-label">EVENT DETAILS</p>

      <span className="event-category">
        {selectedEvent.category}
      </span>

      <h2>{selectedEvent.name}</h2>

      <p className="modal-description">
        {selectedEvent.description}
      </p>

      <div className="modal-information">
        <div>
          <span>Difficulty</span>
          <strong>{selectedEvent.level}</strong>
        </div>

        <div>
          <span>Event Period</span>
          <strong>{selectedEvent.period}</strong>
        </div>

        <div>
          <span>Registration</span>
          <strong>{selectedEvent.status}</strong>
        </div>
      </div>
    </div>
  </div>
)}


  {filteredEvents.length > 0 ? (
    filteredEvents.map((event) => (
      <div className="event-card" key={event.id}>

        <span className="event-category">
          {event.category}
        </span>

        <h3>{event.name}</h3>

        <p>{event.description}</p>

        <div className="event-meta">
          <span>{event.level}</span>
          <span>{event.period}</span>
          <span>{event.status}</span>
        </div>

      <button
  className="event-details-btn"
  onClick={() => setSelectedEvent(event)}
>
  View Details →
</button> 

      </div>
    ))
  ) : (
    <div className="no-events">
  <h3>No events found!</h3>
  <p>Try changing your search or filters.</p>

  <button
    onClick={() => {
      setSearchTerm('')
      setSelectedCategory('All')
      setSelectedPeriod('All')
    }}
  >
    Clear Filters
  </button>
</div>
  )}

</div>


        

          </div>
    </section>
  )
}

export default EventsPage