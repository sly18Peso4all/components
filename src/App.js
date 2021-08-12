import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 6:00pm"
          blogText="Nice Post!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Peter"
          timeAgo="Today at 2:00pm"
          blogText="Breathetaking "
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="David"
          timeAgo="Today at 12:30pm"
          blogText="Beyond Measure"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Smith"
          timeAgo="Today at 3:40pm"
          blogText="Amazing Initiative"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
