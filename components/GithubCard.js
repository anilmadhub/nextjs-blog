import { motion } from "framer-motion";

const GithubCard = ({ name, description, url }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      href={url}
      className="p-6 mt-6 text-left border-solid border-4 border-black w-96 h-40 shadow-lg hover:shadow-lghover  focus:text-blue-600 "
    >
      <h3 className="text-l font-bold font-press-start">{name} </h3>
      <p className="mt-4 text-xl">{description}</p>
    </motion.a>
  );
};

export default GithubCard;
