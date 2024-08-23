import React from "react";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
import js from "./../assets/js.png";
import react from "./../assets/react.png";
import vue from "./../assets/vue.png";
import bootstrap from "./../assets/bootstrap.png";
import tailwind from "./../assets/tailwind.png";
import node from "./../assets/node.png";
import mongodb from "./../assets/mongodb.png";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="pt-[50px] fade-in">
      <h1 className="text-center text-5xl underline">Skills</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 pt-5 px-4">
        <SkillCard
          img={html}
          title="HTML - Intermediate"
          description="Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser"
        />

        <SkillCard
          img={css}
          title="CSS - Intermediate"
          description="Cascading Style Sheets is a style sheet language used for
              specifying the presentation and styling of a document written in a
              markup language such as HTML or XML"
        />

        <SkillCard
          img={js}
          title="JavaScript - Intermediate"
          description="JavaScript, often abbreviated as JS, is a programming language and
              core technology of the Web, alongside HTML and CSS. 99% of
              websites use JavaScript on the client side for webpage behavior"
        />

        <SkillCard
          img={react}
          title="React - Intermediate"
          description="React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc. It
              is maintained by Meta and a community of individual developers and
              companies. React can be used to develop single-page, mobile, or
              server-rendered applications with frameworks like Next.js"
        />

        <SkillCard
          img={vue}
          title="Vue - Intermediate"
          description="Vue.js is an open-source model–view–viewmodel front end JavaScript
              framework for building user interfaces and single-page
              applications. It was created by Evan You and is maintained by him
              and the rest of the active core team members"
        />
        <SkillCard
          img={bootstrap}
          title="Bootstrap - Intermediate"
          description="Bootstrap is a free and open-source CSS framework directed at
              responsive, mobile-first front-end web development. It contains
              HTML, CSS and JavaScript-based design templates for typography,
              forms, buttons, navigation, and other interface components."
        />
        <SkillCard
          img={tailwind}
          title="Tailwind - Intermediate"
          description="Tailwind CSS is an open-source CSS framework. The main feature of
              this library is that, unlike other CSS frameworks like Bootstrap,
              it does not provide a series of predefined classNamees for
              elements such as buttons or tables"
        />

        <SkillCard
          img={node}
          title="Node.js - Basic"
          description=" Node.js® is a free, open-source, cross-platform JavaScript runtime
              environment that lets developers create servers, web apps, command
              line tools and scripts"
        />

        <SkillCard
          img={mongodb}
          title="MongoDB - Basic"
          description="MongoDB is a source-available, cross-platform, document-oriented
              database program. Classified as a NoSQL database product, MongoDB
              utilizes JSON-like documents with optional schemas. MongoDB is
              developed by MongoDB Inc. and current versions are licensed under
              the Server Side Public License"
        />
      </div>
    </div>
  );
};

export default Skills;
