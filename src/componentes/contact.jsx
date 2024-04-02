import { Form } from "./componentesContact/form";

export function Contact(){
    return(
        <div id="contact" className="text-2xl mb-16">
        <div style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/common-bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
            }} className="">     
        <div className="text-center">
            <h1 className="mt-16 m-8 font-bold text-5xl">CONTACT</h1>
            <div className="border-b-8 border-purple-600 w-8 mx-auto rounded-full"></div>

            <h5 className="text-gray-700 text-center mt-6"> 
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </h5>

            <Form />

         

        </div>

       </div>
    </div>
    )
}