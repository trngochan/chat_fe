import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  console.log(props);
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="87c1ddd2-33db-466f-9f42-170243307ec7"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
