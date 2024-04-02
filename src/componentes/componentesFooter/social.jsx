export function Social() {
    return (
        <div className=" flex flex-col  ">
           <div className="justify-center items-end text-center">
           <h1 className="text-white  pr-12  text-2xl uppercase tracking-wide font-bold" style={{ letterSpacing: '1px' }}>
                SOCIAL
            </h1>
           </div>
            <div className="flex pt-4 ml-3  justify-center items-end">
                <img className="p-1 size-8" src="/linkedin-ico.png" alt="" />
                <img className="p-1 size-8" src="/github-ico.png" alt="" />
                <img className="p-1 size-8" src="/twitter-ico.png" alt="" />
                <img className="p-1 size-8" src="/blog-ico.png" alt="" />
                <img className="p-1 size-8" src="/yt-ico.png" alt="" />
            </div>
        </div>
    );
}
