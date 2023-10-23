import React from "react";
import HeaderImg from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <section id="landing">
            <div className="container">
                 <header>
                     <div className="header__container">
                         <div className="header__description">
                            <h1>Canada's most awarded online library platform</h1>
                            <h2>Find your dream book with <span className="purple">Library</span></h2>
                            <a href="#features">
                                <button className="btn">Browse books</button>
                            </a>
                         </div>
                         <div>
                            <figure className="header__im--wrapper">
                                <img src={HeaderImg} alt="" />
                            </figure>
                         </div>
                     </div>
                 </header>
            </div>
        </section>
    )
}

export default Landing