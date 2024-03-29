import React from "react";


const ApprovalCard = props => {
    return (
      <div className="card ui">
          <div className="content">{props.children}</div>
          <div  className="extra content">
              <div className="ui two buttons">
                  <div className="ui basic red button">Approve</div>
                  <div className="ui basic green button">Reject</div>

              </div>

          </div>
      </div>
    );
  };
  
  export default ApprovalCard;