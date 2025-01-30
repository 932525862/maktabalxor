
import { motion } from "framer-motion";

const AgroProcess = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        className="text-2xl md:text-4xl font-bold text-center mb-8"
      >
        How Milmax Works
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#D58044] text-3xl font-bold mb-4">01</span>
          <p className="text-gray-800">
            We select agricultural products based on customer demand from our partner farmers.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#D58044] text-3xl font-bold mb-4">02</span>
          <p className="text-gray-800">
            We inspect the selected products for quality and damage.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#D58044] text-3xl font-bold mb-4">03</span>
          <p className="text-gray-800">
            After inspection, we package the products in eco-friendly, durable, and spacious containers.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#D58044] text-3xl font-bold mb-4">04</span>
          <p className="text-gray-800">
            We store the products for 24-48 hours in special conditions based on the product type.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#D58044] text-3xl font-bold mb-4">05</span>
          <p className="text-gray-800">
            We load the products onto trucks and deliver them to customers.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroProcess;
