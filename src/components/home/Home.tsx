import Carousel from "./Carousel";
import HomeContent from "./card/HomeContent";
export default function Home({name}:any) {
  
  return (
    <section className="w-5/5">
      <div className="mt-3 ">
        <form className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative w-[100%]"> 
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="voice-search" className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search here" required />
            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" >
              <svg className="w-4 h-4 blue-500 text-blue-500 hover:text-gray-900 dark:hover:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"   viewBox="0 0 16 20" >
                <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
<p>{name}</p>
      <div className="mt-4 rounded bg-gray-100 "> 
      <div>
        <Carousel />
        </div>
        <div>
        <HomeContent />
        </div>
      </div>
    </section>
  );
}
