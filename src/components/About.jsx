import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#263238] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#90a4ae] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-grey-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Arya Prasad, currently pursuing B.tech. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a dedicated engineering student in college, I am engaged in the pursuit of knowledge and expertise in the field of engineering. This academic journey involves mastering the art of designing and constructing innovative solutions to complex problems. Through rigorous coursework and collaborative projects, I am honing my problem-solving skills and developing the adaptability required in the dynamic landscape of modern engineering. This path not only challenges me but also empowers me to contribute to technological advancements and progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;