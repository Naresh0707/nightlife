"use client";
import Header from "../../components/common/Header";
import Sidenav from "@/components/common/SideNav";
import Main_add from "@/components/common/advertise/MainAdd";
import VideoMainContent from "@/components/videomaincontent/VideoMainContent";
import RightSideAdd from "@/components/common/advertise/RightSideAdd";
import VideoSideList from "@/components/videosidelist/VideoSideList";


export default function Page() {
 

  return (
    <>
      <section className="bg-gray-300 sec">
        <div className="width">
          <div >
            <header className="fixed z-20 Header">
              <Header />
            </header>
          </div>

          <div className="grid grid-cols-12 pt-20  main-div">
            <div className="col-span-2 sm:col-span-1">
              <Sidenav />
            </div>

            <div className="col-span-11 lg:ms-20 Main_add">
              <div className="Main_add1">
              <Main_add />
              </div>
              

              <div className="grid grid-cols-12 Home_content">
                <div className="col-span-12 sm:col-span-7  md:col-span-7 ">
                  <div>
                    
                  </div>
                  <div className="Home">
                    <div>
                    <VideoMainContent />
                    </div>
                    <div className="mt-5 shadow">
                      {/* <PhotoGallery/> */}
                    </div>
                  </div>
                  
                </div>
                <div className="col-span-12 sm:col-span-3 ms-2 HomeSideList">
                <VideoSideList />
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-6  right-2 mt-4 fixed RightSideAdd">
                  < RightSideAdd />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
