import { useState, useEffect } from 'react';
import { Box, IconButton, Paper, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Carousel = ({ items = [], interval = 5000, height = 400 }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  if (!items.length) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
      }}
    >
      <Image
        src={items[activeStep].image}
        alt={items[activeStep].title}
        layout="fill"
        objectFit="cover"
        quality={90}
        format="webp"
      />
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              opacity: index === activeStep ? 1 : 0,
              transition: 'opacity 500ms ease-in-out',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
              src={item.image}
              alt={item.label || `slide-${index + 1}`}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 4,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
              }}
            >
              <Typography variant="h4" component="h2" sx={{ color: 'white', mb: 1 }}>
                {items[activeStep].label}
              </Typography>
              <Typography variant="body1" sx={{ color: 'white', mb: 2, opacity: 0.9 }}>
                {items[activeStep].description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={items[activeStep].path}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s'
                  }
                }}
              >
                Start Learning
              </Button>
            </Box>
          </Box>
        ))}
      </Paper>

      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default Carousel;