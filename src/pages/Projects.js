import React, { useState } from "react";
import weather from "./../assets/weather.png";
import todo from "./../assets/todo.png";
import recipe from "./../assets/recipe.png";
import chat from "./../assets/chat.png";
import movie from "./../assets/movie-app.png";
import fakeStore from "./../assets/fake-store.png";
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
              The Weather App is a user-friendly application designed to provide
              real-time weather information for any location. This app delivers
              accurate weather data, including current temperature, humidity,
              wind speed, and weather conditions. Users can search for weather
              updates by city, allowing them to stay informed about conditions
              in their area or around the world.
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
              The Todo List project is a simple, yet efficient task management
              application designed to help users organize and prioritize their
              daily activities. The project is built to allow users to easily
              create, update, delete, and manage tasks in a user-friendly
              interface. Each task can be marked as completed or pending,
              enabling users to track their progress.
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
              The Recipe App is a cooking companion designed to help users
              discover, organize, and follow recipes for a variety of dishes.
              This app provides a vast collection of recipes with step-by-step
              instructions, ingredients, and cooking tips to guide users in
              preparing delicious meals. Users can search for recipes by
              cuisine, ingredients, or meal type, making meal planning easier
              and more enjoyable.
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
              The Chat App is a real-time messaging application designed to
              facilitate communication between users through text messages. This
              app allows users to create or join chat rooms, send and receive
              messages instantly, and stay connected with others in a seamless
              and interactive interface. With features like user authentication,
              group chats, and message notifications, the Chat App is built for
              both personal and group communication needs.
            </p>
            <Button href="https://gallant-davinci-2bb9f0.netlify.app/" />
          </div>
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={movie}
            alt="1 Maj - Serbian rest day"
            onClick={() => handleImageClick(movie, "Netflix Clone")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Netflix Clone
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              The Netflix Clone is a streaming platform replica designed to
              mimic the core functionalities of Netflix. This project allows
              users to browse and stream movies, TV shows, and other video
              content. The app features user authentication, a dynamic content
              library, search functionality, and a responsive user interface
              that provides a sleek and immersive streaming experience. It
              showcases how a complex streaming service can be built using
              modern web technologies.
            </p>
            <Button href="https://github.com/VladanS94/Movie-app" />
          </div>
        </div>

        <div className="flex items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <img
            className="rounded-lg h-36 cursor-pointer"
            src={fakeStore}
            alt="1 Maj - Serbian rest day"
            onClick={() => handleImageClick(fakeStore, "Fake Store")}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fake Store
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
              The Fake Store App is an e-commerce platform designed to simulate
              the core functionalities of an online shopping experience. This
              app allows users to browse a variety of products, add items to
              their cart, and proceed with a mock checkout process. With
              features like product categories, user authentication, and a
              simple, intuitive interface, the Fake Store App showcases how a
              modern e-commerce website can be structured.
            </p>
            <Button href="https://fake-store-three-mu.vercel.app/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
