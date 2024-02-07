import Image from "../../../../public/images/grahame-jenkins-p7tai9P7H-s-unsplash.jpg";
export default function Main_add() {
  return (
    <section className=" add">
      <div className=" w-[90%]">
        <div className=" flex bg-black row-1 gap-2  rounded ">
          <div className=" w-full">
            <img src={Image.src} className="rounded h-[160px]  w-full min-w" />
          </div>
          <div className="ms-4 w-full max-h1">
            <h1 className="text-white w-full text-3xl add_font main-head">Iconic luxury. Unmissable benefits.</h1>
            <h4  className="text-white mt-1 font-bold main-head1">Bring home the mercedes-Benz-S-class with grand benifits</h4>
            <p className="text-gray-200 mt-1 text-xs w-4/5">
              Drive home the iconic Mercedes-Benz S-Class and indulge in the best of luxury with limitted
              time ownership packages
            </p>
            <hr className="w-[320px] mt-1 "></hr>
            <span className="text-blue-500 text-sm "><a href="#">Assured Buy-black <span className="text-white">+</span> Complimentry 4th Year Extend <br></br> Warranty <span className="text-white">+</span> 2 Year Complimentry Service Package</a></span>
          </div>
{/* 
          <div className="iframe-container">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              width="600"
              height="200"
              frameBorder="0"
              allowFullScreen
              title="Embedded Video"
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
}
