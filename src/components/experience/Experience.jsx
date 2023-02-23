import React from "react";
import "./experience.css";

import "animate.css";

import group from "../../assets/Picture1.jpg";

const experience = () => {
  return (
    <section id="experience">
      <h2>Group Members</h2>

      <div className="container experience__container">
        <div className="experience__frontend ">
          <h3>Name and USN</h3>

          <div className="experience__content">
            <article className="experience__details left">
              <div>
                <h4>• Abhishek Salimath</h4>
                <small className="text-light">2JH19CS002</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>• Anisha Rao</h4>
                <small className="text-light">2JH19CS008</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>• Mukundraj Irkal</h4>
                <small className="text-light">2JH19CS039</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>• P. Saiteja</h4>
                <small className="text-light">2JH19CS044</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>• Pradeep Shet</h4>
                <small className="text-light">2JH19CS049</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>• Maharudra </h4>
                <small className="text-light">2JH20CS409</small>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="groupPic">
        <h2>Group Photo</h2>
        <img src={group} alt="" />
      </div>
    </section>
  );
};

export default experience;
