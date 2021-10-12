import React from "react";
import "./themes.css";
import themeArray from "./themesdata.json";

export default function Projects() {
  return (
    <section id="themes" className="flex min-h-screen h-auto pb-20">
      <div className="problemContainer max-w-7xl">
      <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
            Themes
          </h1>
        <ul className="pt-10 grid lg:grid-cols-3 gap-14 sm:grid-cols-1 md:grid-cols-2 m-0 p-0 list-none">
          {themeArray.map((e) => {
            return (
              <li className="problem_card h-80 rounded-3xl" key={e.title}>
                <div className="problem_card__frame">
                  <div style={{ backgroundImage: `url(${e.image})` }} className="border-gray-500 border-2 rounded-3xl bg-cover h-full w-full bg-no-repeat bg-center"></div>
                  <h2 className="">{e.title}</h2>
                </div>
                <div className="problem_card__overlay"></div>
                <div className="problem_card__content text-center">
                  <span className="block pb-4 font-semibold text-xl">{e.title}</span>
                  <span>{e.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
