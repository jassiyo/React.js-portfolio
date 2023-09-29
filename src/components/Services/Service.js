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
              <p>Visual Design</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Layout</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Accessibility</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>User Research</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Interactive Elements</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>User Journey Mapping</p>
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
              <p>Front-End Development</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Full-Stack Development</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Web Frameworks</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Web Hosting and Deployment</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Testing and Debugging</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Version Control</p>
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
              <p>Define Your Audience</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Set Clear Goals</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Research and Planning</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Content Formats</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Quality Content</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Storytelling</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Engagement</p>
            </li>
            <li>
              <GiCheckMark className="serviceListIcon" />
              <p>Analytics and Feedback</p>
            </li>
          </ul>
        </article>
        {/* End of card 3 Contect creation */}
      </div>
    </section>
  );
};

export default Service;
