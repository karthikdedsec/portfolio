import Heroimg from "../assets/coder.svg";

const Hero = () => {
  return (
    <div className="w-full bg-[#0C1426] pb-24">
      <div className="section-container">
        <div className="flex gap-[250px]  items-center py-10">
          {/* text */}
          <div className="w-[600px] space-y-12">
            <h1 className="font-OutFit text-white text-[38px] font-bold leading-[47px]">
              HI, Iam{" "}
              <span className="text-[#E8BF38] text-[43px]">Karthik Raj</span>{" "}
              Iam a UI/UX Designer and full stack Developer
            </h1>
            <p className="text-[rgba(255,255,255,0.70)]">
              Iam a Fullstack Developer specializing in building exceptional
              digital experiences currently iam focused on building responsive
              web applications.
            </p>
            <div className="flex gap-9">
              <button className="font-OutFit font-medium px-[51px] py-[10px] bg-[#E8BF38] hover:shadow-lg">
                View Work
              </button>
              <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out">
                Get in Touch
              </button>
            </div>
          </div>
          {/* Image */}
          <div>
            <img
              className="w-[520px] h-[520px] object-contain"
              src={Heroimg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
