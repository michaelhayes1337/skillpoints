import React from "react";
import styles from "./Navigation.module.css";
type Props = {};

const Navigation = (props: Props) => {
  return (
    <div
      className={`${styles.navigation} navbar fixed top-0 left-0 bg-base-100`}
    >
      <div className="flex-1 flex items-center">
        <a href="/">michaelhayes</a>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="flex w-full">
          <a href="/blogs" className="flex-1  text-center">
            blogs
          </a>
          <a href="/projects" className="flex-1 text-center">
            projects
          </a>
          <a href="/skills" className="flex-1 text-center">
            skills
          </a>
          <a href="/contact" className="flex-1 text-center">
            contact
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="flex w-full">
          <a href="/blogs" className="flex-1  text-center">
            blogs
          </a>
          <a href="/projects" className="flex-1 text-center">
            projects
          </a>
          <a href="/skills" className="flex-1 text-center">
            skills
          </a>
          <a href="/contact" className="flex-1 text-center">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

{
  /* <div class="navigation bg-dark row p-3 m-0 text-white">
  <div class="col-3 m-0 p-0 d-flex justify-content-start align-items-center gruppo-regular">
    <a href="/" class="text-white">
      michaelhayes
    </a>
  </div>
  <div class="col d-flex justify-content-between align-items-center gruppo-regular">
    <div class="row w-100">
      <div class="col-3">
        <a href="/blogs" class="text-white d-flex justify-content-center">
          &nbsp;blogs
        </a>
      </div>
      <div class="col-3">
        <a href="/projects" class="text-white d-flex justify-content-center">
          &nbsp;projects
        </a>
      </div>
      <div class="col-3">
        <a href="/skills" class="text-white d-flex justify-content-center">
          &nbsp;skills
        </a>
      </div>
      <div class="col-3">
        <a href="/contact" class="text-white d-flex justify-content-center">
          &nbsp;contact
        </a>
      </div>
    </div>
  </div>
  <div class="col-3 d-flex justify-content-end align-items-center m-0 p-0">
    <div class="row w-100 m-0 p-0">
      <div class="col"></div>
      <div class="col-2 m-0 p-0 d-flex justify-content-center align-items-center">
        <a
          href="https://github.com/michaelhayes1337"
          target="_blank"
          class="ml-auto"
        >
          &nbsp;<i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div class="col-2 m-0 p-0 d-flex justify-content-center align-items-center">
        <a
          href="https://www.linkedin.com/in/michaelhayes1337/"
          target="_blank"
          class="ml-auto w-auto h-auto"
        >
          &nbsp;&nbsp;<i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div class="col-2 m-0 p-0 d-flex justify-content-center align-items-center">
        <button class="btn text-primary btn-sm btn-outline-light ml-auto">
          <b>CV</b>
        </button>
      </div>
    </div>
  </div>
</div>; */
}
