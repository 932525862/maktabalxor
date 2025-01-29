import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Fresh from "../../../assets/abouta2.jpg"
import Dried from "../../../assets/aboutq2.jpg"

const products = [
  { id: 1, name: 'Fresh fruits', image: Fresh, link: '/production/wet' },
  { id: 2, name: 'Dried fruits', image: Dried, link: '/production/dry' }
];

const OurProducts = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10">
      <h2 className="text-5xl md:text-5xl font-bold mb-30 text-center">Current Agro Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products?.map((product, index) => (
          <div  
            key={product.id} 
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => navigate(product.link)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto md:w-[500px] md:h-[400px] object-cover" 
            />
            <motion.div
              initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="absolute bottom-4 left-0 right-0 bg-white text-orange-700 font-bold text-center py-3 px-5 rounded-md text-lg md:text-2xl"
            >
              {product.name}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
