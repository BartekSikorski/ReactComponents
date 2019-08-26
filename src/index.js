import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// Create a react comonent
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      <CommentDetail
        author="JOhn"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      <CommentDetail
        author="Kate"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
    </div>
  );
};

//  Take the react comp and show i  on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
