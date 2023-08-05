import React from 'react'
import '../Portfolio/portfolio.css'
import IMG1 from '../../assets/imdb.png'
import IMG2 from '../../assets/stopwatch.png'
import IMG3 from '../../assets/imdb.png'
import IMG4 from '../../assets/stopwatch.png'
import IMG5 from '../../assets/imdb.png'
import IMG6 from '../../assets/stopwatch.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolioContainer'>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG1}></img>
          </div>

          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG2}></img>
          </div>

          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG3}></img>

          </div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG4}></img>

          </div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG5}></img>

          </div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        <article className='portfolioItems'>
          <div className='portfolioItemImage'>
          <img src={IMG6}></img>

          </div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/jassiyo'className='btn'>Git HUB</a>
          <a href='https://jassiyo.github.io/IMDB-Clone/'className='btn btn-primary'>LIVE DEMO</a>
        </article>
        
      </div>

    </section>
  )
}

export default Portfolio