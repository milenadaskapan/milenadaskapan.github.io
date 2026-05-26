import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from "react";

import projectsbackground from '../images/projectsbackground.png'
import rightbuttonprojects from '../images/rightbuttonprojects.png'
import leftbuttonprojects from '../images/leftbuttonprojects.png'
import menu from '../images/menu.png'

import '../components/projectsview.css'
import projects from "../data/projects"

function ProjectView() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") || "featured"
  );

  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const filtered =
    category === "featured"
      ? projects.filter(p => p.categories?.includes("featured"))
      : projects.filter(p => p.categories?.includes(category));

  const current = filtered[index];

  return (
    <div className="viewPage">

      <img
        src={projectsbackground}
        className="projectviewbackground"
      />

      <button
        className="menuButton"
        onClick={() => navigate('/ContentPage')}
      >
        <img src={menu} className="menu" alt="Menu" />
      </button>

      <div className="tabs">

        {["featured", "ai", "software", "research"].map(cat => (

          <span
            key={cat}
            className={category === cat ? "active" : ""}

            onClick={() => {
              setCategory(cat);
              setIndex(0);
            }}
          >
            {cat.toUpperCase()}
          </span>

        ))}

      </div>

      <div className="carousel">

        {index > 0 && (

          <button
            className="arrow left"
            onClick={() => setIndex(i => Math.max(i - 1, 0))}
          >
            <img src={leftbuttonprojects} alt="Previous" />
          </button>

        )}

        <div className="viewport">

          <div
            className="slider"
            style={{
              transform: `translateX(-${index * 1050}px)`
            }}
          >

            {filtered.map((project, i) => (

              <div className="slide" key={i}>

                <div className="projectcard">

                  <div className="cardLeft">
                    <img src={project.image} alt="" />
                  </div>

                  <div className="cardRight">

                    <h2>{project.title}</h2>

                    <p>{project.description}</p>

                    <div className="stack">

                      {project.stack?.map((tech, j) => (
                        <span key={j}>{tech}</span>
                      ))}

                    </div>

                    <button
                      className="viewBtn"
                      onClick={() => {
                        setIndex(i)
                        setShowModal(true)
                      }}
                    >
                      View More
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {index < filtered.length - 1 && (

          <button
            className="arrow right"
            onClick={() =>
              setIndex(i => Math.min(i + 1, filtered.length - 1))
            }
          >
            <img src={rightbuttonprojects} alt="Next" />
          </button>

        )}

      </div>

      {showModal && current && (

        <div
          className="modalOverlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="modalBox"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="closeBtn"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <div className="modalLeft">
              <img src={current.image} alt="" />
            </div>

            <div className="modalRight">

              <h2>{current.title}</h2>

              <p className="subtitle">
                {current.description}
              </p>

              <h4>IN A NUTSHELL</h4>

              <p>{current.longDesc}</p>

              <div className="overviewCard">

                <h4>PROJECT OVERVIEW</h4>

                <div className="overviewList">

                  {current.overview?.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}

                </div>

              </div>

              <h4>TECH STACK</h4>

              <div className="tags">

                {current.stack?.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}

              </div>

              {current.link && (

                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubBtn"
                >
                  View Project
                </a>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default ProjectView;