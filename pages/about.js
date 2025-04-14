import Head from "next/head";
import { Grid, Typography, Box, Container, Paper } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | GoProgrammingHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Manoj Pawar
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Enthusiasts Software Engineer Architect
                </Typography>
                <SocialMedia />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 8 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h3" gutterBottom>
                  Welcome to GoProgrammingHub
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, color: "text.secondary" }}
                >
                  Empowering developers through comprehensive learning resources
                  and practical insights
                </Typography>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                  Technical Expertise
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, textAlign: "justify" }}
                >
                  With over a decade of experience in software development, I
                  specialize in building scalable and efficient solutions across
                  the full technology stack. My expertise spans:
                </Typography>
                <Box sx={{ pl: 2, mb: 3 }}>
                  <Typography component="div">
                    • Backend Development: GoLang, Java (Spring Boot, JPA),
                    Python, Microservices Architecture
                    <br />
                    • Frontend Technologies: React, Angular, Material-UI,
                    Bootstrap, Modern CSS
                    <br />
                    • Database Systems: Oracle, MySQL, MongoDB, Redis
                    <br />• Big Data: HDFS, Apache Spark, Hive, Apache Kafka,
                    Couchbase
                    <br />• DevOps & Cloud: Docker, Kubernetes, AWS, CI/CD
                    pipelines
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                  Vision & Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, textAlign: "justify" }}
                >
                  GoProgrammingHub was born from a passion for knowledge sharing
                  and community building in the tech space. Our platform focuses
                  on delivering high-quality, practical programming tutorials
                  with a special emphasis on Go programming language and modern
                  software development practices. We believe in creating content
                  that bridges the gap between theory and real-world
                  application.
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <ContactUsForm />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
}
