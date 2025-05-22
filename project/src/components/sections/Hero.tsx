

// import React, { useEffect, useState, useRef } from 'react';
// import { ChevronRight, Home, MapPin } from 'lucide-react';
// import { motion } from 'framer-motion';

// export const Hero: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showScrollIndicator, setShowScrollIndicator] = useState(true);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [userInteracted, setUserInteracted] = useState(false);

//   // Enhanced video handling
//   useEffect(() => {
//     const handleVideo = () => {
//       if (isMobile) {
//         // On mobile, use the poster image only
//         setVideoLoaded(false);
//         return;
//       }

//       const video = videoRef.current;
//       if (video) {
//         // For desktop browsers
//         video.muted = true;
//         video.playsInline = true;
        
//         const playPromise = video.play();
        
//         if (playPromise !== undefined) {
//           playPromise
//             .then(() => {
//               setVideoLoaded(true);
//             })
//             .catch(error => {
//               // Fallback to image if video fails
//               setVideoLoaded(false);
//               console.log("Video playback failed:", error);
//             });
//         }
//       }
//     };

//     const checkIfMobile = () => {
//       const isMobile = window.innerWidth < 768;
//       setIsMobile(isMobile);
//       handleVideo();
//     };

//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
    
//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//       // Clean up video
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.removeAttribute('src');
//         videoRef.current.load();
//       }
//     };
//   }, [isMobile]);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollIndicator(window.scrollY < 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         {!isMobile ? (
//           <>
//             <video
//               ref={videoRef}
//               autoPlay={!isMobile || userInteracted}
//               muted
//               onClick={() => setUserInteracted(true)}
//               loop
//               playsInline
//               disablePictureInPicture
//               className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
//               poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               onLoadedData={() => setVideoLoaded(true)}
//             >
//               <source src="/static/output.webp" type="image/webp" />
//             </video>
//             {/* Fallback image if video doesn't load */}
//             {!videoLoaded && (
//               <div 
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ 
//                   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
//                 }}
//               />
//             )}
//           </>
//         ) : (
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ 
//               backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
//             }}
//           />
//         )}
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/30" />
//       </div>

//       {/* Content */}
//       <motion.div 
//         className="container mx-auto px-6 relative z-10"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <div className="max-w-2xl">
//           <motion.h1 
//             className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//             variants={itemVariants}
//           >
//             Welcome to <span className="text-emerald-400">JC's Emerald</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
//             variants={itemVariants}
//           >
//             Experience harmonious living in our thoughtfully designed 2 & 3 BHK apartments in Jawahar Nagar, Chennai.
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 mb-16"
//             variants={itemVariants}
//           >
//             <a 
//               href="#contact" 
//               className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/20"
//             >
//               Schedule a Visit
//               <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </a>
//             <a 
//               href="#apartments" 
//               className="group bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 font-medium"
//             >
//               View Apartments
//             </a>
//           </motion.div>
          
//           <motion.div 
//             className="flex flex-wrap gap-6"
//             variants={containerVariants}
//           >
//             <motion.div 
//               className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center">
//                 <Home className="text-blue-400 mr-3 h-6 w-6" />
//                 <div>
//                   <p className="text-blue-400 font-bold text-3xl">5</p>
//                   <p className="text-gray-300 text-sm">Total Floors</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center">
//                 <MapPin className="text-blue-400 mr-3 h-6 w-6" />
//                 <div>
//                   <p className="text-blue-400 font-bold text-3xl">10</p>
//                   <p className="text-gray-300 text-sm">Premium Units</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center">
//                 <Home className="text-blue-400 mr-3 h-6 w-6" />
//                 <div>
//                   <p className="text-blue-400 font-bold text-3xl">2</p>
//                   <p className="text-gray-300 text-sm">Mosques Nearby</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div 
//             className="mt-8"
//             variants={itemVariants}
//           >
//             <p className="inline-flex items-center bg-blue-900/50 text-blue-100 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//               <Home className="mr-2 h-4 w-4" />
//               Ideally located for Muslim families with nearby prayer facilities
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {showScrollIndicator && (
//         <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <div className="w-8 h-14 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
//             <motion.div 
//               className="w-2 h-2 bg-white rounded-full"
//               animate={{ y: [0, 10] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </section>
//   );
// };






import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Home, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  // Enhanced video handling
  useEffect(() => {
    const handleVideo = () => {
      if (isMobile) {
        // On mobile, we'll use the WebP animation
        setVideoLoaded(true); // WebP should load immediately
        return;
      }

      const video = videoRef.current;
      if (video) {
        // For desktop browsers
        video.muted = true;
        video.playsInline = true;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setVideoLoaded(true);
            })
            .catch(error => {
              setVideoLoaded(false);
              console.log("Video playback failed:", error);
            });
        }
      }
    };

    const checkIfMobile = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
      handleVideo();
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [isMobile]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <>
            {/* Desktop - MP4 Video */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src="/static/output.mp4" type="video/mp4" />
            </video>
            {!videoLoaded && (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
                }}
              />
            )}
          </>
        ) : (
          <>
            {/* Mobile - WebP Animation with GIF Fallback */}
            <picture>
              <source srcSet="/static/output.webp" type="image/webp" />
              <img 
                src="/static/output.gif" 
                className="w-full h-full object-cover"
                alt="Background animation"
                loading="eager"
              />
            </picture>
          </>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/30" />
      </div>

      {/* Content (keep all your existing content) */}
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Welcome to <span className="text-emerald-400">JC's Emerald</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Experience harmonious living in our thoughtfully designed 2 & 3 BHK apartments in Jawahar Nagar, Chennai. Pre booking available now!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            variants={itemVariants}
          >
            <a 
              href="#contact" 
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/20"
            >
              Schedule a Visit
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#apartments" 
              className="group bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 font-medium"
            >
              View Apartments
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-6"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <Home className="text-blue-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-blue-400 font-bold text-3xl">5</p>
                  <p className="text-gray-300 text-sm">Total Floors</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-blue-400 font-bold text-3xl">10</p>
                  <p className="text-gray-300 text-sm">Premium Units</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border-l-4 border-blue-500 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <Home className="text-blue-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-blue-400 font-bold text-3xl">2</p>
                  <p className="text-gray-300 text-sm">Mosques Nearby</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8"
            variants={itemVariants}
          >
            <p className="inline-flex items-center bg-blue-900/50 text-blue-100 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              <Home className="mr-2 h-4 w-4" />
              Ideally located for Muslim families with nearby prayer facilities
            </p>
          </motion.div>
        </div>

      </motion.div>
       {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-14 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};