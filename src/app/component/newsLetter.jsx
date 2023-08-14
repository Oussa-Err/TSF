const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 p-2 gap-4 justify-around items-center">
      <div>
        <h1 className="font-extrabold text-[1.5rem] text-violet-950 text-center">SOUSCRIRE À LA NEWSLETTER</h1>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-3">
        <form action="post">
          <input type="email" name="your-email" placeholder=" Email"  className='border-2 focus:border-violet-950 focus:outline-none'/>
        </form>
        <button className="p-3 bg-orange-400 rounded-md hover:scale-105">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
