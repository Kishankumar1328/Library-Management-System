import React from 'react';
import './Home.css';
import library from './images/library.png';

const books = [
  { title: 'Book Title (2025)', author: 'Author Name' },
  { title: 'Book Title (2025)', author: 'Author Name' },
  { title: 'Book Title (2025)', author: 'Author Name' },
  { title: 'Book Title (2025)', author: 'Author Name' },
];

function Topbar() {
  return (
    <>
      <div className="Topbar">
        <h1>DIGITAL LIBRARY</h1>
        <input type="text" placeholder="Search for books, authors, etc." className="search-bar" />
        <ul>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>Contact us</button></li>
          <li><button>Login</button></li>
        </ul>
      </div>
      <div className="body">
        {books.map((book, idx) => (
          <div className='cart' key={idx}>
            <img src={library} alt="Library" className="library-image" />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button>Download</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Topbar;