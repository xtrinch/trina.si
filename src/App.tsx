import "./App.css";
import clover from "./assets/four-leaf-clover.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import me from "./assets/me.jpeg";
import medium from "./assets/medium.svg";

function App() {
  return (
    <div className="App flex align-center items-center h-[100vh]">
      <div className="z-[1] absolute top-[190px] right-0 left-0 bg-yellow w-[900px] h-[500px] mx-auto my-auto p-6 rounded-md flex flex-row items-end border-black border space-x-[30px]">
        <div className="bg-lightblack border border-darkbrown rounded-md p-4 text-left h-full">
          <h1>Welcome.</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="min-w-[80px] text-center flex flex-col items-center justify-center space-y-[15px] py-[20px] bg-brown rounded-md">
          <img src={github} className="w-[60px]" />
          <img src={linkedin} className="w-[60px]" />
          <img src={medium} className="w-[40px]" />
        </div>
      </div>
      <div className="absolute top-0 w-full h-[100px]">
        {["#1F3D09", "#4C6402", "#AE951F", "#9B6D18", "#753A1C"].map(
          (color) => (
            <div
              style={{
                backgroundColor: color,
                height: "10px",
              }}
            />
          )
        )}
      </div>
      <div className="z-[2] absolute w-[160px] right-[calc(50vw-500px)] top-[250px]">
        <img src={me} className="rounded-full border border-darkbrown" />
      </div>
      <div className="absolute top-[50px] left-[calc(50vw-350px)] w-[15px] h-[50vh] bg-darkblack" />
      <div className="absolute top-[50px] right-[calc(50vw-350px)] w-[15px] h-[50vh] bg-darkblack" />
      <img
        src={clover}
        className="z-[2] absolute top-[85px] left-[calc(50vw-460px)] min-h-[120px]"
      />
    </div>
  );
}

export default App;
