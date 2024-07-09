import { Button } from "./ui";

export default function Hero() {
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          An AI for the Stock Analysis
        </h5>
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
          An AI tools for the better Analysis of Stock <br />
          
        </h1>
        <p className="max-w-[452px] text-para">
        Stock analysis is an essential evaluation, relying on trust. It delves into market elements, exploring nuances and potential. Analyzing assets, it ensures clarity, refining insights.
        </p>
        <Button title="Try now" />
      </div>

      <div className="max-h-[506px] max-w-[678px]">
        <img
          className="custom-animate size-full object-contain"
          src="/final.avif"
          alt="Hero"
        />
      </div>
    </div>
  );
}
