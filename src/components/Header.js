import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Header = (() => {
    const [pageYPos, setPageYPos] = useState(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setPageYPos(window.pageYOffset);
        });
    });

    return (
      <header className={pageYPos > 300 ? 'inactiveClass' : 'activeClass'}>
        <div className="headerNav">
          <Link className="navItem" to="/">Home</Link>
          <Link className="navItem" to="/table">Table</Link>
          <Link className="navItem" to="/jsx-example">Jsx example</Link>
          <Link className="navItem" to="/counter">Counter</Link>
        </div>
      </header>
    )
})

export default Header