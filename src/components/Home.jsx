
function Home() {
  const topRatedBooks = [
  {
    id: 1,
    title: "The Hobbit",
    author: "Eric Miles",
    year: "2021",
    description: "Fantasy adventure loved by generations of readers.",
    image: "top1.jpeg",
  },
  {
    id: 2,
    title: "1984",
    author: "Eric Miles",
    year: "2021",
    description: "A powerful vision of a dystopian future.",
    image: "top2.png",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Diana Rowe",
    year: "2000",
    description: "Romance and wit from Jane Austen at her finest.",
    image: "top3.jpeg",
  },
];

    const events = [
  {
    id: 1,
    title: "Reading Marathon",
    date: "August 5th, 2025",
    image: "event1.jpeg",
  },
  {
    id: 2,
    title: "Author Q&A Live Chat",
    date: "August 12th, 2025",
    image: "event2.png",
  },
  {
    id: 3,
    title: "Monthly Book Club",
    date: "Every 1st Friday",
    image: "event3.jpeg",
  },

  
];
  return (
    <div className="home-page">
      <section className="greeting">
        <h1>Hello and Welcome to ReadVerse Library!</h1>
        <p>Your digital gateway to explore, borrow, and read books anywhere, anytime.</p>
      </section>

      <section className="features-section">
        <h2> Our Current Features</h2>

        <div className="feature-box">
          <h3> Borrow Books</h3>
          <p>Browse the collection and borrow books with a click.</p>
        </div>

        <div className="feature-box">
          <h3> Book Search</h3>
          <p>Find books by title, author, year, or genre.</p>
        </div>

        <div className="feature-box">
          <h3> Genre Categorization</h3>
          <p>Explore books organized by genre to match your taste.</p>
        </div>

        <div className="feature-box">
          <h3> Book Details</h3>
          <p>Click any book to see full details like description and author.</p>
        </div>
      </section>
      

      <section className="events-section">
        <h2> Upcoming Events</h2>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
            <img src={`/images/${event.image}`} alt={event.title} style={{ width: '100%', height: '200px' , borderRadius: '4px' }} />
            <div className="event-info">
              <h4>{event.title}</h4>
              <p>{event.date}</p>
            </div>
            </div>
          ))}
        </div>
      </section>

      <section className="top-rated-section">
        <h2>Top Rated Books</h2>
        <div className="top-rated-list">
          {topRatedBooks.map((book) => (
            <div className="top-book-card" key={book.id}>
              <img src={`/images/${book.image}`} alt={book.title} style={{ width: '100%', height: '200px' , borderRadius: '4px' }}/>
              <div className="top-book-info">
                <h4>{book.title}</h4>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Year:</strong> {book.year}</p>
                <p>{book.description}</p>
                <button className="borrow-btn">Borrow</button>
              </div>
            </div>
          ))}    
        </div>    
      </section>

      
    </div>
  );




}

export default Home;
