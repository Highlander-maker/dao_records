import bannerImage from '../public/spaceship.png'

function Banner() {
  

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10"
         style={{ backgroundImage: `url(${bannerImage})` }}>
      <div>
        <h1 className="text-6xl"> Dao Records Diary</h1>
        <h2 className="mt-5 md:mt-0">
            Welcome to your{" "}
            <span className="underline decoration-4 decoration-[#FF7B7C]">
            favourite blog
            </span>{" "}
            for pivoters
            </h2>
      </div>
      
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Dao Record Diaries | The latest in DAO technology | Brought to you by
        Juno Communications SubDao
      </p>
    </div>
  );
}

export default Banner;
