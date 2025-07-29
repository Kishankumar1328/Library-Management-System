import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';

// Book icon component using Boxicons
const BookIcon = () => (
  <span className="book-icon" style={{ fontSize: '40px', color: '#2563eb', marginBottom: '8px' }}>
    <i className="bx bxs-book"></i>    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  </span>
);
const books = [
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    link: 'https://ia803102.us.archive.org/35/items/CharlesDuhigg.ThePowerOfHabit_201808/Charles-Duhigg.The-Power-of-Habit.pdf'
  },
  {
    title: 'Better Than Before',
    author: 'Gretchen Rubin',
    link: 'https://gretchenrubin.com/wp-content/uploads/2016/06/Better-Than-Before-Sample-Chapter-Gretchen-Rubin.pdf'
  },
  {
    title: 'How to Change',
    author: 'Katy Milkman',
    link: 'https://example.com/how-to-change.pdf'
  },
  {
    title: 'Tiny Habits',
    author: 'BJ Fogg',
    link: 'https://example.com/tiny-habits.pdf'
  },
  {
    title: 'On the Origin of Species',
    author: 'Charles Darwin',
    link: 'https://archive.org/details/originofspecies00darwuoft/page/2/mode/2up'
  },
  {
    title: 'A Graduate Course in Applied Cryptography',
    author: 'Dan Boneh, Victor Shoup',
    link: 'https://crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_4.pdf'
  },
  {
    title: 'The Basics of Finance: An Introduction to Financial Markets',
    author: 'PAMELA PETERSON DRAKE & FRANK J. FABOZZI',
    link: 'https://github.com/samlee2015jp/statistics_books/blob/main/The%20Basics%20of%20Finance_%20An%20Introduction%20to%20Financial%20Markets%2C%20Business%20Finance%2C%20and%20Portfolio%20Management%20(Frank%20J.%20Fabozzi%20Series).pdf'
  }
  ,{
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    link: 'https://ati.dae.gov.in/ati12052021_1.pdf'
  },
  {
    title: 'The 4-Hour Work Week', 
    author: 'Tim Ferriss',
    link: 'https://tim.blog/wp-content/uploads/2014/10/the-4-hour-workweek-expanded-and-updated-by-timothy-ferriss.pdf'
  },
  {
    title: 'The 10X Rule',
    author: 'Grant Cardone',
    link:'https://catalogimages.wiley.com/images/db/pdf/9780470627600.excerpt.pdf'
  },
  {
    title:'Atomic Habits',
    author: 'James Clear',
    link:'https://www.bookdio.org/bestsellers/atomic-habits'
  },
  {
    title:' Deep Work',
    author: 'Cal Newport',
    linl:'https://cdn.bookey.app/files/pdf/book/en/deep-work.pdf'
  },
  {
    title:'Think and Grow Rich',
    author: 'Napoleon Hill',
    link:'https://www.henryarmstrongfoundation.org/f/think-and-grow-rich-napoleon-hill_text[1].pdf333.pdf'

  },
  {
    title:' Who Moved My Cheese?',
    author: 'Spencer Johnson',
    link:'https://ati.dae.gov.in/ati12052021_7.pdf'
  },
  {
    title:'Rich Dad Poor Dad',
    author: 'Robert T.Kiyosaki',
    link:'https://archive.org/download/rich-dad-poor-dad_bongotweet/rich-dad-poor-dad.pdf'
  },
  {
    title:'Thinking, Fast and Slow',
    author:'Daniel Kahneman',
    link:'https://cdn.penguin.co.uk/dam-assets/books/9780141033570/9780141033570-sample.pdf'
  },
  {
    title:'Man’s Search for Meaning',
    author: 'Viktor Frankl',
    link:'https://img1.wsimg.com/blobby/go/2ad2e274-a4f3-4a49-a754-b2cc3670307b/downloads/Man_s%20Search%20For%20Meaning%20(%20PDFDrive.com%20).pdf?ver=1614706661817'
  },
  {
    title:'Artificial Intelligence: A Modern Approach (3rd Edition)'
    , author: 'Stuart Russell and Peter Norvig',
    link:'https://people.engr.tamu.edu/guni/csce625/slides/AI.pdf'
  },
  {
    title:' Python Crash Course',
    author: 'Eric Matthes',
    link:'https://khwarizmi.org/wp-content/uploads/2021/04/Eric_Matthes_Python_Crash_Course_A_Hands.pdf'

  },
  {
    title:'1984',
    author: 'George Orwell',
    link:'https://www.clarkchargers.org/ourpages/auto/2015/3/10/50720556/1984.pdf'
  },
  {
    title:'Pride and Prejudice',
    author: 'Jane Austen',
    link:'https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf'
  },
  {
    title:'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    link:'https://ct02210097.schoolwires.net/site/handlers/filedownload.ashx?moduleinstanceid=26616&dataid=28467&FileName=The%20Great%20Gatsby.pdf'
  },{
    title:'The Art of Prompt Engineering with ChatGPT'
    ,authot:'Nathan Hunter',
    link:'https://lib.scu.edu.cn/genai/static/wenjian/The%20Art%20of%20Asking%20ChatGPT%20for%20High-Quality%20Answers--Ibrahim_John.pdf'
  },
  {
    title:'Prompt Engineering Guide',
    author:' DAIR.AI ',
    link:'https://oa.upm.es/84328/1/book_english_version.pdf'
  },
  {
    title:'Transformers for Natural Language Processing',
    author:'Denis Rothman',
    link:'https://landing.deepset.ai/hubfs/Ebooks/oreilly_chapter_excerpt_nlpt.pdf'
  },
  {
    title:'Mastering Transformers',
    author:'Savas Yildirim, Luisa T.',
    link:'https://dokumen.pub/natural-language-processing-with-transformers-revised-edition-1098136799-9781098136796-9781098103248.html'
  }
];

function Topbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="Topbar">
        <Link to="/" className="logo-link">
          <h1>DIGITAL LIBRARY</h1>
        </Link>
        <input 
          type="text" 
          placeholder="Search for books, authors, etc." 
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button className={`nav-btn ${isHomePage ? 'active' : ''}`}>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className={`nav-btn ${location.pathname === '/about' ? 'active' : ''}`}>
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className={`nav-btn ${location.pathname === '/contact' ? 'active' : ''}`}>
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <button className="nav-btn">Login</button>
            </li>
          </ul>
        </nav>
      </div>
      
      {isHomePage && (
        <div className="body">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, idx) => (
              <div className="cart" key={idx}>
                <BookIcon />
                <h2>{book.title}</h2>
                <h3>by {book.author}</h3>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <button className="download-btn">Download</button>
                </a>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No books found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Topbar;