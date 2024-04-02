import { Nombre } from "./componentesFooter/nombre";
import { Social } from "./componentesFooter/social";

export function Footer(){
    return(
        <div className="text-xl">
            <div className="bg-black pt-12 pl-9">
                <div className="flex p-5 m-12">
                    <div className="column w-1/2">
                        <Nombre />
                    </div>
                    <div className="column w-1/2">
                        <Social />
                    </div>
                </div>
                <div className="pt-4 text-center text-gray-400 mr-6 ml-6 ">
                    <p className="py-4 border-t text-sm text-center border-gray-400">
                        © Copyright 2024 . Made by Aarón Vidaña
                    </p>
                </div>
            </div>
        </div>
    );
}
