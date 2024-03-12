"use client";
import dynamic from "next/dynamic";
import axios from "axios";
import { useEffect , useState } from "react";


const ReactPlayer = dynamic(
  () =>
    import("react-player").catch((err) => {
      console.error("Failed to load react-player", err);
      return () => <div>Failed to load player</div>;
    }),
  { ssr: false }
);

export default function VideoPlayer() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("api/crud");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="">
        <div className=" rounded-lg">
          <div className=" justify-center items-center mt-5">
            <div className=" justify-between ">
              <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <ReactPlayer
                    url="\videos\video (2160p) (1).mp4"
                    controls={true}
                    width="100%"
                    height="280px"
                  />
                  
                  <h1 className="mb-3 ms-2 mt-2 font-bold text-gray-700 dark:text-gray-400 text-lg">
                    [Working BGM] Comfortable Music That makes feels positive --
                    Morning mood -- Daily Routine
                  </h1>
                </div>
                <div className="flex justify-end items-end gap-5 pb-5">
                  <div
                    className="flex like-icon"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >

                    {isHovered ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#0D47A1"
                          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                        />
                      </svg>
                    ) : (
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                        fill="#0D47A1"
                        className="icon-hover"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                      </svg>
                    )}
                    <h1 className="ms-2 text-white  font-bold">Like</h1>
                  </div>
                  <div className=" flex me-10 rounded-full bg-blue-900 ps-4 pe-4 pt-1 pb-1 share-icon border border-blue-900 border-solid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="22"
                      viewBox="0 0 512 512"
                      fill="white"
                      className="icon-color"
                    >
                      <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                    </svg>
                    <h1 className="ms-2 text-white ">SHARE</h1>
                  </div>
                </div>
                <div className="bg-gray-200 ms-2 me-2 mt-2 mb-2 rounded-xl">
                  <p className="p-2">
                    Hello everyone. It's me again. I will stay at home and
                    study. it's full of fun energy today, Son it's ready spread
                    to everyone with hilarious music.&#128293;&#x1F525;&#x1F525;Have fun together&#128522;&#128522;&#128522;<span>
                      <a href="#" className="text-blue-700 hover:underline">
                        View More
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function setUsers(users: any) {
  throw new Error("Function not implemented.");
}

