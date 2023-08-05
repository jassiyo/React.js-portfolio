import React from "react";
import "../Services/services.css";
import { GiCheckMark } from "react-icons/gi";

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serviceContainer">
        {/* Starting of the card 1 */}
        <article className="service">
          <div className="serviceHead">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="serviceList">
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
          </ul>
        </article>
        {/* End of card 1 UI/UX */}

        {/* Starting of the card 2 wen Development */}
        <article className="service">
          <div className="serviceHead">
            <h3>Web Develpment</h3>
          </div>
          <ul className="serviceList">
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
          </ul>
        </article>
        {/* End of card 2 web development*/}

        {/* Starting of the card 3 content creation*/}
        <article className="service">
          <div className="serviceHead">
            <h3>Content Creation</h3>
          </div>
          <ul className="serviceList">
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>qwerty zxcvbnmauiopq jksblvalsin rg aoarsasd fghj</p>
            </li>
          </ul>
        </article>
        {/* End of card 3 Contect creation */}
      </div>
    </section>
  );
};

export default Service;
