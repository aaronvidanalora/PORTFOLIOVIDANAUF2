export function Form() {
    return (
        <div className="">
            <form className="box-shadow bg-white p-8 mt-3 mx-auto text-right  rounded-5 sm:w-1/2 w-4/4 ">
            <label htmlFor="name" className="text-gray-600 text-xl tracking-wide font-semibold block text-left mb-4">Name</label>
            <input type="text" id="name" name="name" className="text-gray-700 p-6 w-full border-1 border-gray-300 text-1.6rem bg-gray-100 rounded-5 font-semibold" />

            <label htmlFor="email" className="text-gray-600 text-xl tracking-wide font-semibold block text-left mb-4">Email</label>
            <input type="email" id="email" name="email" className="text-gray-700 p-6 w-full border-1 border-gray-300 text-1.6rem bg-gray-100 rounded-5 font-semibold" />

            <label htmlFor="message" className="text-gray-600 text-xl tracking-wide font-semibold block text-left mb-4">Message</label>
            <textarea id="message" name="message" rows="4" className="text-gray-700 p-6 w-full border-1 border-gray-300 text-1.6rem bg-gray-100 rounded-5 font-semibold resize-none"></textarea>

            <button className="py-5 px-14 mt-4 font-bold text-xl text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                SUBMIT
            </button>
        </form>
        </div>
    );
}
