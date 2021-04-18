import Image from "next/image";

const Tools = () => {
  const logos = [
    { src: "/assets/html5.png", alt: "HTML5", width: 70, height: 50 },
    { src: "/assets/css3.png", alt: "CSS3", width: 70, height: 50 },
    { src: "/assets/react.png", alt: "React", width: 80, height: 50 },
    { src: "/assets/nextjs.png", alt: "Next js", width: 80, height: 50 },
    { src: "/assets/node.png", alt: "Node JS", width: 100, height: 50 },
    { src: "/assets/hapi.svg", alt: "Hapi.dev", width: 100, height: 50 },
    {
      src: "/assets/expressjs.png",
      alt: "ExpressJS",
      width: 100,
      height: 35,
    },
    { src: "/assets/prismic.png", alt: "Prismic", width: 50, height: 50 },
    { src: "/assets/figma.svg", alt: "Figma", width: 100, height: 50 },
    { src: "/assets/netlify.png", alt: "Netlify", width: 100, height: 35 },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {logos.map((l, idx) => (
        <Image
          key={idx}
          src={l.src}
          alt={l.alt}
          width={l.width}
          height={l.height}
        />
      ))}
    </div>
  );
};

export default Tools;
