import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useUser from "../hooks/use-user";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { storage } from "../lib/firebase";
const PhotoHeader = require("../components/post/header").default;

export default function Post() {
  const {
    user: { username, userId },
  } = useUser();

  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    document.title = "Create a new post!";
  }, []);

  const uploadFile = () => {
    if (selectedFile == null) return;
    storage.ref(`/${username}/${selectedFile.name}`).put(selectedFile);
    //UPLOAD SUCCESSFUL FINISH ADDING PATH TO DATABASE AND SHOW IT

    //THEN NAVIGATE BACK TO HOME
  };

  return (
    <div className="bg-gray-background">
      <Header username={username} />
      <div className="justify-center rounded border gap-4 mx-auto max-w-screen-md bg-white border-gray-primary mb-16">
        <PhotoHeader username={username} />
        {!image ? (
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed cursor-pointer ">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Attach a file
                </p>
              </div>
              <input
                type="file"
                className="opacity-0"
                value={image}
                onChange={onImageChange}
              />
            </label>
          </div>
        ) : (
          <img src={image} alt="New post" />
        )}

        <div className="flex justify-between border border-gray-primary py-2">
          <p className="font-bold my-4 mx-2">@{username}</p>
          <input
            className="mx-4 w-full border my-2 py-2 border-gray-primary min-w-fit"
            type="text"
            placeholder="Add a caption!"
          ></input>
          <button
            onClick={uploadFile}
            className="bg-blue-medium font-bold text-sm rounded text-white
                                w-20 h-10 mx-5 my-3 "
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
}
