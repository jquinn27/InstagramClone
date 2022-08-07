import React from "react";
import Header from "../components/Header";

export default function Post() {
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        Post
      </div>
    </div>
  );
}
