import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Fresh from "../../../assets/allimg/freshp.webp";
import Dried from "../../../assets/allimg/quritlgan.webp";

const products = [
  { id: 1, name: 'Fresh fruits', image: Fresh, link: '/production/wet' },
  { id: 2, name: 'Dried fruits', image: Dried, link: '/production/dry' }
];

const OurProducts = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10 bg-gray-100">
      <motion.h2 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-4xl font-bold mb-16 text-center"
      >
        Current Agro Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Gap kattalashtirildi */}
        {products?.map((product, index) => (
          <motion.div  
            key={product.id} 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => navigate(product.link)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto md:w-[500px] md:h-[400px] object-cover" 
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="absolute bottom-4 left-0 right-0 bg-white text-orange-700 font-bold text-center py-3 px-5 rounded-md text-lg md:text-2xl"
            >
              {product.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
