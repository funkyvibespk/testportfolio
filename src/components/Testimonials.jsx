import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Irfan Khan',
    role: 'CEO, TechNova',
    content: 'Kamran transformed our outdated platform into a lightning-fast modern application. His attention to detail in the UI and absolute mastery over React exceeded our expectations.',
    rating: 5,
    initial: 'I'
  },
  {
    id: 2,
    name: 'Ayesha Azeem',
    role: 'Founder, E-Shop Solutions',
    content: 'The e-commerce dashboard he built for us handled our Black Friday traffic without a hitch. Incredible full-stack skills and a great communicator throughout the project.',
    rating: 5,
    initial: 'A'
  },
  {
    id: 3,
    name: 'Farman Tariq',
    role: 'Creative Director, Studio Aura',
    content: 'We needed a portfolio that stood out. Kamran delivered an interactive, fluid, and visually stunning website that has won us multiple new clients. Highly recommended!',
    rating: 5,
    initial: 'F'
  },
  {
    id: 4,
    name: 'Saim Ahmed',
    role: 'Operations Manager, LogiSys',
    content: 'An exceptional developer who understands both design aesthetics and complex system architectures. The interactive data visualizations he created are phenomenal.',
    rating: 5,
    initial: 'S'
  },
  {
    id: 5,
    name: 'Memona Iftikhar',
    role: 'Marketing Head, Global Reach',
    content: 'Working with Kamran was a breeze. He brought our digital agency vision to life with seamless animations and a truly premium user experience.',
    rating: 5,
    initial: 'M'
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
              className="testimonial-card-wrapper"
            >
              
              <div className="mtc-main glass-panel">
                <div className="mtc-subtitle">Client Review</div>
                <p className="mtc-text">"{currentTestimonial.content}"</p>
                <div className="mtc-divider"></div>
                <p className="mtc-subtext">
                  {currentTestimonial.name} has partnered with us as a {currentTestimonial.role} and successfully elevated their digital presence.
                </p>
              </div>

              <div className="mtc-name glass-panel">
                {currentTestimonial.name}
              </div>
              
              <div className="mtc-avatar glass-panel">
                {currentTestimonial.initial}
              </div>
              
              <div className="mtc-stars glass-panel">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" fill="currentColor" />
                ))}
              </div>

              <div className="mtc-footer glass-panel">
                <div className="mtc-footer-left">
                  <Heart size={20} className="mtc-icon" />
                  <MessageCircle size={20} className="mtc-icon" />
                  <Send size={20} className="mtc-icon" />
                </div>
                <div className="mtc-footer-right">
                  <Bookmark size={20} className="mtc-icon" />
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
