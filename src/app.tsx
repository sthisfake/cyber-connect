import "./styles.css";
import ConnectButton from "./components/ConnectButton";
import FollowButton from "./components/FollowButton";

export default function App() {
  return (
    <div className="container">
      <h1>Create a Connection</h1>
      <ConnectButton></ConnectButton>
      <FollowButton></FollowButton>
    </div>
  );
}
