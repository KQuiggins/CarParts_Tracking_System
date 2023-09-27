import { Player } from "@lottiefiles/react-lottie-player";

const HomeScreen = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Welcome to Autoparts Outlet</h1>
      <Player
        src="https://lottie.host/38313f6c-a129-43de-b259-3680142b7b1e/GSIlreFLUu.json"
        style={{
          height: "500px",
          width: "500px",
        }}
        loop
        autoplay
      />
    </div>
  );
};

export default HomeScreen;
