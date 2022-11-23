import "./App.css";
import clover from "./assets/four-leaf-clover.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import me from "./assets/me.jpeg";
import medium from "./assets/medium.svg";

function App() {
  return (
    <div className="App flex align-center items-center h-[100vh]">
      <div className="z-[1] absolute top-[190px] right-0 left-0 bg-lightbrown w-[600px] max-w-full mx-auto my-auto p-4 rounded-md flex flex-row items-end border-black border space-x-[30px]">
        <div className="bg-darkbrown border border-darkbrown rounded-md p-4 h-full text-justify">
          <div className="text-[28px]">Welcome - </div>
          <div className="text-[28px]">
            I'm Mojca, the person behind the curtain.
          </div>
          <div className="mt-[20px]">
            I'm a Slovenian based full stack developer.
          </div>
          <div className="mt-[20px]">
            I am passionate about building excellent software that improves the
            lives of those around me.
          </div>
          <div className="mt-[20px]">
            There isn't much to see here. But feel free to check out my github
            for some of my tinkerings and medium for some of my blog posts. You
            will also find my LinkedIn, should you need it.
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full h-[50px] grid">
        <div className="line bg-darkgreen" />
        <div className="line bg-green" />
        <div className="line bg-yellow" />
        <div className="line bg-lightbrown" />
        <div className="line bg-brown" />
      </div>
      <div className="absolute mx-auto top-[50px] max-w-[calc(100%-40px)] left-0 right-0 w-[530px] flex justify-between">
        <div className="top-[50px] left-[calc(50vw-250px)] w-[15px] h-[50vh] bg-darkbrown" />
        <div className="top-[50px] right-[calc(50vw-250px)] w-[15px] h-[50vh] bg-darkbrown" />
      </div>
      <img
        src={clover}
        alt="clover"
        className="z-[2] absolute top-[85px] left-[calc(50vw-360px)] min-h-[120px]"
      />
      <img
        alt="me"
        className="z-[2] w-[160px] rounded-full border border-darkbrown absolute right-[15px] bottom-[10px]"
        src={me}
      />
      <div className="absolute right-[0px] bottom-[0px] bg-green p-[10px] rounded-tl-md flex flex-col items-center space-y-[20px] pb-[180px]">
        <a href="https://github.com/xtrinch">
          <div className="bg-yellow rounded-full w-[60px] h-[60px] flex items-center  justify-center">
            <img src={github} alt="github" className="w-[50px]" />
          </div>
        </a>
        <a href="https://medium.com/@mojca.rojko">
          <div className="bg-yellow rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <img src={medium} alt="medium" className="w-[35px]" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mojca-rojko-54438599/">
          <div className="bg-yellow rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <img src={linkedin} alt="linkedin" className="w-[40px]" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
