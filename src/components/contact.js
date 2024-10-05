import WipeButton from "./wipeButton";

export default function Contact() {
  return (
    <div className="py-24">
      <section className="mx-4 xl:mx-auto max-w-5xl flex flex-col justify-center items-center rounded-xl shadow-xl" style={{ background: `url("PlumBG.png")` }}>
        <div className="px-8 py-32 w-full flex flex-col text-center justify-center items-center bg-gray-400/50 rounded-t-xl">
          <p className="font-dText font-semibold text-white text-2xl">
            Get in Touch and Start Your Journey
          </p>
          <p className="font-dText font-semibold text-white text-2xl">
            ___
          </p>
          <p className="font-dText text-white text-lg pt-4 max-w-2xl text-center">
            We’re here to help you keep your business productive and growing.
          </p>
        </div>
        <div className="p-8 w-full flex flex-col lg:flex-row gap-4 justify-between items-center bg-gray-10 rounded-b-xl">
          <WipeButton text="Submit Resume" type="transparent" link="/submit-resume" />
          <WipeButton text="Submit Staffing Request" type="transparent" link="/submit-staffing-request" />
        </div>
      </section>
    </div>
  )
}