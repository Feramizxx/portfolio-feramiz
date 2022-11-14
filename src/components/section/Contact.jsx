import React from "react";

const Contact = () => {
  return (
    <section className="pt-24" id="contact">
      <div className="pt-24 ml-auto mr-auto w-[90%] flex flex-col items-center" >
        <span className="w-[300px] text-center text-[30px] font-[700] border-[5px] px-8 py-2 border-[#000] mb-12 "  >
          CONTACT
        </span>

        <form className="flex flex-col pt-4 w-[609px]  sm:w-[320px] items-center">
          <input
            type="text"
            className="w-[100%] border-l-[4px] border-b-[4px] border-black py-2 my-4 px-2"
            placeholder="ENTER YOUR NAME*"
            
          />
          <input
            type="email"
            className="w-[100%] border-l-[4px] border-b-[4px] border-black py-2 my-4 px-2"
            placeholder="ENTER YOUR EMAIL*"
            
          />
          <input
            type="text"
            className="w-[100%] border-l-[4px] border-b-[4px] border-black py-2 my-4 px-2"
            placeholder="PHONE NUMBER*"
            
            
          />
          <textarea
            className="border-[4px] border-black px-2 h-40 w-full"
            placeholder="YOUR MESSAGE*"
           
          />
          <button className="font-[700] border-r-[2px] border-l-[2px] px-8 border-black mt-12 mb-12">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
