import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import AppHead from "../components/AppHead";
import Image from "next/image";
import ImageBgCard from "../components/ImageBgCard";
import Carousel from "../components/Carousel";
import { Container, Grid, Typography, Box, Button, Paper } from "@mui/material";

export default function Home() {
  const carouselItems = [
    {
      image: '/images/golang-bg.jpg',
      label: 'Golang Tutorial',
      description: 'Master Go programming with our comprehensive tutorial series. Learn about goroutines, channels, and building efficient applications.',
      path: '/posts/programming/golang/01-Introduction-to-Go-Language'
    },
    {
      image: '/images/python-bg.png',
      label: 'Python Tutorial',
      description: 'Explore Python programming from basics to advanced concepts. Perfect for beginners and experienced developers alike.',
      path: '/posts/programming/python/01-Introduction-to-Python'
    },
    {
      image: '/images/apache-spark-bg.webp',
      label: 'Apache Spark Tutorial',
      description: 'Learn big data processing with Apache Spark. Discover how to handle large-scale data analytics and machine learning.',
      path: '/posts/bigdata/apache-spark/01-introduction-to-apache-spark'
    }
  ];

  const tutorialSections = [
    {
      title: "Go Lang Programming",
      description: "Master Go programming with our comprehensive tutorial series. Learn about goroutines, channels, and building efficient applications.",
      image: "/images/golang-bg.jpg",
      path: "/posts/programming/golang"
    },
    {
      title: "Python Programming",
      description: "Explore Python programming from basics to advanced concepts. Perfect for beginners and experienced developers alike.",
      image: "/images/python-bg.png",
      path: "/posts/programming/python"
    },
    {
      title: "Scala Programming",
      description: "Learn Scala programming and functional programming concepts. Build scalable applications with ease.",
      image: "/images/golang-bg.jpg",
      path: "/posts/programming/scala"
    },
    {
      title: "Apache Spark",
      description: "Learn big data processing with Apache Spark. Discover how to handle large-scale data analytics and machine learning.",
      image: "/images/apache-spark-bg.webp",
      path: "/posts/bigdata/apache-spark"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithms. Improve your problem-solving skills.",
      image: "/images/python-bg.png",
      path: "/posts/data-structures-and-algorithms"
    },
    {
      title: "Problem Solving Skills",
      description: "Enhance your coding skills with practical problem-solving exercises and challenges.",
      image: "/images/golang-bg.jpg",
      path: "/posts/problemsolving"
    }
  ];

  return (
    <>
      <AppHead title="GoProgrammingHub - Learn Programming" />
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, mb: 6 }}>
          <Carousel items={carouselItems} height={500} />
        </Box>

        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, mt: 4 }}>
          Available Tutorials
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {tutorialSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> 
              <Paper
                component="a"
                href={section.path}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '56.25%',
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Box sx={{ p: 3, flexGrow: 1, bgcolor: 'background.paper' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {section.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{
                      mt: 'auto',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container spacing={3}>
            {carouselItems.map((item, index) => (
              <Grid xs={12} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      '& .MuiTypography-root': { transform: 'scale(1.1)' },
                      '& .MuiButton-root': { opacity: 1 }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.label}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 2
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        mb: 1,
                        textAlign: 'center',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        mb: 2,
                        textAlign: 'center',
                        opacity: 0.9
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={item.path}
                      sx={{
                        opacity: 0.9,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    >
                      Start Learning
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
