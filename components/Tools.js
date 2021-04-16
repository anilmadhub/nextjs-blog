import Image from "next/image";

const Tools = () => {
  const logos = [
    { src: "/assets/html5.png", alt: "HTML5" },
    { src: "/assets/css3.png", alt: "CSS3" },
    { src: "/assets/react.png", alt: "React" },
    { src: "/assets/nextjs.png", alt: "Next js" },
    { src: "/assets/node.png", alt: "Node JS" },
    { src: "/assets/hapi.svg", alt: "Hapi.dev" },
    { src: "/assets/expressjs.png", alt: "Express JS" },
    { src: "/assets/prismic.png", alt: "Prismic" },
    { src: "/assets/figma.svg", alt: "Figma" },
    { src: "/assets/netlify.png", alt: "Netlify" },
  ];

  return (
    <div className="grid grid-cols-5 gap-1 flex">
      {logos.map((l, idx) => (
        <div key={idx}>
          <Image src={l.src} alt={l.alt} width="100" height="50" />
        </div>
      ))}
    </div>
  );
};

export default Tools;
