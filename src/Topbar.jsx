import React from 'react';
import './Home.css';
import library from './images/library.png';
function Topbar()
{
    return (
        <>
        <div className="Topbar">  
            <h1>DIGITAL LIBRARY</h1>
            <input type="text" placeholder="Search for books, authors, etc." className="search-bar" />
            <ul>
                <li><button>Home</button></li>
                <li><button>About</button></li>
                <li><button>Contact as</button></li>
                <li><button>Login</button></li>
            </ul>

        </div> 
        <div className="body">
           
            <div className='cart'>
                <img src={library} alt="Library" className="library-image" />
                <h2>Book Title(2025)</h2>
                <h3>Author Name</h3>
                <button>Download</button>
                
            </div>
            </div>
        </>    
    );

}
export default Topbar;