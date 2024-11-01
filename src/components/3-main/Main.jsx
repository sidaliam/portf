import { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { myProjects } from "../../myprojects.js";
const Main = () => {
  const [currentactive, setcurrentactive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  return (
    <main className="flex">
             <div className="tech-icons flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML Logo"
            className="tech-logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS Logo"
            className="tech-logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="tech-logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            alt="MongoDB Logo"
            className="tech-logo"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Node.js Logo"
            className="tech-logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            alt="Python Logo"
            className="tech-logo"
          />
        </div>
      <section className="flex  left-section">
        <button
          className={currentactive === "all" ? "active" : null}
          onClick={() => {
            setcurrentactive("all");
            setarr(myProjects);
          }}
        >
          all projects
        </button>
        <button
          className={currentactive === "css html" ? "active" : null}
          onClick={() => {
            setcurrentactive("css html");
            const newarr = myProjects.filter((item) => {
              return item.category === "html/css";
            });
            setarr(newarr);
          }}
        >
          HTML/CSS/JS
        </button>
        <button
          className={currentactive === "React" ? "active" : null}
          onClick={() => {
            setcurrentactive("React");
            const newarr = myProjects.filter((item) => {
              return item.category === "react";
            });
            setarr(newarr);
          }}
        >
          React & MUI
        </button>
        <button
          className={currentactive === "MERN" ? "active" : null}
          onClick={() => {
            setcurrentactive("MERN");
            const newarr = myProjects.filter((item) => {
              return item.category === "mern";
            });
            setarr(newarr);
          }}
        >
          MERN
        </button>
        <button
          className={currentactive === "Nextjs" ? "active" : null}
          onClick={() => {
            setcurrentactive("Nextjs");
            const newarr = myProjects.filter((item) => {
              return item.category === "Nextjs";
            });
            setarr(newarr);
          }}
        >
          Next Js
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgpath} className="  card">
              <img width={266} src={item.images[0]} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projecttitle} </h1>
                <p className="sub-title">{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.linkgit}>
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <Link to={`/more/${item.projecttitle}`}>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

    </main>
  );
};

export default Main;
