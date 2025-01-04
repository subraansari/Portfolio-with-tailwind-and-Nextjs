import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import model from "../../public/homeModel.jpg";

const AboutMe = () => {
  return (
    <section className="pt-20 pb-14 w-full">
      <h1 className='flex justify-center mb-10 text-center font-bold text-[32px] md:text-4xl lg:text-5xl'>
  About{" "}
  <span className='text-purple ml-2'>Me</span>
</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-12 w-full">
  <div className="hover:border-purple border-2 border-transparent rounded-2xl ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]">
    <Image
      src={model}
      alt="About Me"
      width={450}
      height={300}
      className="rounded-2xl"
    />
  </div>

  <div className="flex-1 mt-6 md:mt-0 md:ml-4">
    <p className="p-4 mb-4 hover:border-purple border-2 border-purple rounded-2xl ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]">
      <span className="text-purple">» </span> I am an enthusiastic <span className="text-purple">Computer Science</span> student from <span className="text-purple">Government College for women</span> passionate about harnessing the power of technology to create impactful solutions.
    </p>

    <p className="p-4 mb-4 hover:border-purple border-2 border-purple rounded-2xl ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]">
      <span className="text-purple">» </span> My journey revolves around continuous learning and experimenting with emerging technologies. I find joy in solving complex problems and am always eager to explore new domains and skills. 💡
    </p>

    <p className="p-4 mb-4 hover:border-purple border-2 border-purple rounded-2xl ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]">
      <span className="text-purple">» </span> Right now, I am sharpening my <span className="text-purple">Frontend</span> and <span className="text-purple">Backend Development</span> skills and diving into the world of modern tech. I am also seeking <span>Web Development</span> and <span>UI/UX Design</span> roles that challenge and expand my capabilities.
    </p>

    <p className="p-4 mb-4 hover:border-purple border-2 border-purple rounded-2xl ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]">
      <span className="text-purple">» </span> When it comes to building products, I am driven by my love for <span className="text-purple">HTML/CSS</span> and modern <span className="text-purple">TypeScript</span> & <span className="text-purple">JavaScript</span> libraries like <span>React.js</span>, crafting intuitive, high-performance web applications.
    </p>
  </div>
</div>


      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutMe;
