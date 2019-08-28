import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react comonent
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="JOhn"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Kate"
        timeAgo="Today at 4:03PM"
        avatar={faker.image.avatar()}
        content="Nice blog"
      />
      </ApprovalCard>
    </div>
  );
};

//  Take the react comp and show i  on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
