import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechNova',
    content: 'Kamran transformed our outdated platform into a lightning-fast modern application. His attention to detail in the UI and absolute mastery over React exceeded our expectations.',
    rating: 5,
    initial: 'S'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder, E-Shop Solutions',
    content: 'The e-commerce dashboard he built for us handled our Black Friday traffic without a hitch. Incredible full-stack skills and a great communicator throughout the project.',
    rating: 5,
    initial: 'M'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Creative Director, Studio Aura',
    content: 'We needed a portfolio that stood out. Kamran delivered an interactive, fluid, and visually stunning website that has won us multiple new clients. Highly recommended!',
    rating: 5,
    initial: 'E'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = testimonialsData.length - 1;
    if (newIndex >= testimonialsData.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="testimonials-container">
      <h2 className="section-title">
        Client <span className="text-gradient">Testimonials</span>
      </h2>
      
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={() => paginate(-1)}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="carousel-content">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="testimonial-card glass-panel"
            >
              <Quote className="quote-icon" size={48} />
              
              <div className="stars">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-icon" fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-text">"{currentTestimonial.content}"</p>
              
              <div className="client-info">
                <div className="client-avatar">
                  {currentTestimonial.initial}
                </div>
                <div>
                  <h4 className="client-name">{currentTestimonial.name}</h4>
                  <p className="client-role">{currentTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button className="carousel-btn next" onClick={() => paginate(1)}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="carousel-indicators">
        {testimonialsData.map((_, index) => (
          <div 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
