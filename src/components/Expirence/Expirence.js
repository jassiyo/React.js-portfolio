import '../Expirence/expirence.css'
import React from 'react'
import {HiCheckBadge} from 'react-icons/hi2'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import {deer} from '../../assets/deer.fbx'

const Expirence = () => {
  return (
    <section id='expirence'>
      <h5>What Skills I Have</h5>
      <h1>My Expireance</h1>
      <div className='container expirenceContainer'>
        <div className='expirenceFrontend'>
          <h3>Frontend Developer</h3>
          <div className='expirenceContent'>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
                <h4>Html</h4>
                
                <small className='text-light'>Experieance</small>
                < deer />
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Css</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

          {/* Backend start here */}
        <div className='expirenceBackend'>
        <h3>Backend Developer</h3>
          <div className='expirenceContent'>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experieance</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="expirenceDetail">
              <HiCheckBadge className="expirenceDetailIcons"/>
              <div>
              <h4>Express.js</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Expirence