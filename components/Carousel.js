import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Paper, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import customImageLoader from '../lib/image-loader';

const Carousel = ({ items = [], interval = 5000, height = 400 }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = items.length;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  }, [maxSteps]); // Dependency: maxSteps

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  }, [maxSteps]); // Dependency: maxSteps

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, handleNext]); // Corrected dependencies

  if (!items.length) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        borderRadius: 2, // Added slight rounding
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)' // Added subtle shadow
      }}
    >
      {/* Main background image using Next/Image */}
      <Image
        key={activeStep} // Add key to force re-render on step change for transitions
        src={items[activeStep].image}
        alt={items[activeStep].label}
        layout="fill"
        objectFit="cover"
        quality={85} // Slightly adjusted quality
        priority // Prioritize loading the visible image
        loader={customImageLoader}
        // Removed format="webp" as it's deprecated and handled automatically
      />
      
      {/* Overlay Content Area */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
          color: 'white',
          textAlign: { xs: 'center', sm: 'left' } // Responsive text align
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 1, 
            fontWeight: 'bold', 
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)' // Text shadow for readability
          }}
        >
          {items[activeStep].label}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2, 
            opacity: 0.9, 
            maxWidth: '600px', // Limit description width on larger screens
            mx: { xs: 'auto', sm: 0 } // Center text on xs screens
          }}
        >
          {items[activeStep].description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={items[activeStep].path}
          sx={{
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }
          }}
        >
          Start Learning
        </Button>
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handleBack}
        aria-label="Previous slide"
        sx={{
          position: 'absolute',
          left: { xs: 8, sm: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          color: 'black',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
          zIndex: 1 // Ensure buttons are above content
        }}
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        aria-label="Next slide"
        sx={{
          position: 'absolute',
          right: { xs: 8, sm: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          color: 'black',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
          zIndex: 1 // Ensure buttons are above content
        }}
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>

      {/* Optional: Dots Indicator */}
      <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1, zIndex: 1 }}>
        {items.map((_, index) => (
          <Box
            key={index}
            component="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveStep(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: index === activeStep ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              p: 0,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                bgcolor: index === activeStep ? 'primary.dark' : 'rgba(255, 255, 255, 0.8)',
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;