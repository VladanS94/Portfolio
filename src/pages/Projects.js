import React, { useState } from "react";
import weather from "./../assets/weather.png";
import todo from "./../assets/todo.png";
import recipe from "./../assets/recipe.png";
import chat from "./../assets/chat.png";
import rest from "./../assets/rest.png";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState({ src: null, alt: "" });

  const handleImageClick = (image, alt) => {
    setSelectedImage({ src: image, alt });
  };

  const handleCloseModal = () => {
    setSelectedImage({ src: null, alt: "" });
  };

  return (
    <div id="projects" className="py-[50px]">
      <h1 className="text-center text-5xl underline">Projects</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 pt-5 px-4">
        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={weather}
            alt="Weather App"
            onClick={() => handleImageClick(weather, "Weather App")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Weather App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser.
            </p>

            <Button href="https://cosmic-longma-e24471.netlify.app/" />
          </div>
          {selectedImage.src && (
            <Modal show={!!selectedImage.src} onClose={handleCloseModal}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-screen rounded-lg"
              />
            </Modal>
          )}
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={todo}
            alt="Todo List"
            onClick={() => handleImageClick(todo, "Todo List")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Todo List in Vue 3
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              Cascading Style Sheets is a style sheet language used for
              specifying the presentation and styling of a document written in a
              markup language such as HTML or XML.
            </p>
            <Button href="https://effulgent-trifle-0556c9.netlify.app/" />
          </div>
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={recipe}
            alt="Recipe"
            onClick={() => handleImageClick(recipe, "Recipe")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Recipe for food
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              JavaScript, often abbreviated as JS, is a programming language and
              core technology of the Web, alongside HTML and CSS. 99% of
              websites use JavaScript on the client side for webpage behavior.
            </p>
            <Button href="https://laughing-aryabhata-69bd67.netlify.app/" />
          </div>
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={chat}
            alt="Chat project"
            onClick={() => handleImageClick(chat, "Chat project")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chat project
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc. It
              is maintained by Meta and a community of individual developers and
              companies. React can be used to develop single-page, mobile, or
              server-rendered applications with frameworks like Next.js
            </p>
            <Button href="https://gallant-davinci-2bb9f0.netlify.app/" />
          </div>
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={rest}
            alt="1 Maj - Serbian rest day"
            onClick={() => handleImageClick(rest, "1 Maj - Serbian rest day")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              1 Maj - Serbian rest day
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              Vue.js is an open-source model–view–viewmodel front end JavaScript
              framework for building user interfaces and single-page
              applications. It was created by Evan You and is maintained by him
              and the rest of the active core team members.
            </p>
            <Button href="https://keen-taiyaki-142ca0.netlify.app/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
