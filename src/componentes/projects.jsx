import { Dopefolio } from "./componentesProyects/dopefolio";

export function Proyects() {
    return (
        <div id="projects" className="text-xl">
            <div className="text-center">
                <h1 className="mt-16 m-8 font-bold text-5xl">PROJECTS</h1>
                <div className="border-b-8 border-purple-600 w-8 mx-auto rounded-full"></div>

                <h5 className="text-gray-700 text-center mt-6"> 
                Here you will find some of the personal and clients projects that I created with each project containing its own case study
                </h5>

                <Dopefolio />

            </div>

           
        </div>
    );
}