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
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{name} &rarr;</h3>
      <p className="mt-4 text-xl">{description}</p>
    </motion.a>
  );
};

export default GithubCard;
