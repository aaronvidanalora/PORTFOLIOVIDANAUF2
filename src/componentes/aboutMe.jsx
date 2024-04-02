import { Columna1 } from "./componentesAboutMe/Columna1";
import { Columna2 } from "./componentesAboutMe/Columna2";

export function AboutMe() {
    return (
      <div id="about" className="text-xl bg-gray-50">
        <div className="text-center">
          <h1 className="p-7 font-bold text-5xl">ABOUT ME</h1>
          <div className="border-b-8 border-purple-600 w-8 mx-auto rounded-full"></div>
  
          <h5 className="text-gray-700 text-center mt-6">
            Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
          </h5>
  
          <div className="flex flex-col p-5 md:flex-row md:m-12">
            <div className="w-full md:w-1/2 md:mr-5">
              <Columna1 />
            </div>
            <div className="w-full md:w-1/2 md:ml-5 md:mt-5">
              <Columna2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
  