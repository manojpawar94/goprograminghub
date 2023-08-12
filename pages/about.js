import Head from "next/head";
import Image from "next/image";
import ContactUsForm from "../components/ContactUsForm";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

import profilepic from "../public/images/manoj-pawar.jpg";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <Head>
                <title>About | GoProgrammingHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="container">
                <div className="row mt-2">
                    <div className="col-md-4 text-center">
                        <Image
                            className="rounded-circle profile-img p-5"
                            alt="Manoj-Pawar-Profile"
                            src={profilepic}
                        />
                        <h3>Manoj Pawar</h3>
                        <hr />
                        <SocialMedia />
                    </div>

                    <div className="col-md-8 pt-5">
                        <h1 className="ps-4">Greetings, Tech Enthusiast,</h1>
                        <h3 className="ps-4">
                            A warm and hearty thank you for gracing us with your
                            presence at GoProgrammingHub.com!
                        </h3>
                        <p className="ps-4 pt-3 text-justify">
                            I am a passionate software developer who thrives on
                            innovation. My professional journey showcases a
                            diverse array of backend technologies, including
                            GoLang, Gin, Java, Spring Boot, JPA, and Python. I'm
                            equally skilled in frontend technologies, adeptly
                            navigating Angular, React, Bootstrap, Material
                            Design Framework, CSS3, and HTML5. My expertise
                            extends to databases, encompassing Oracle, MySQL,
                            MongoDB, and Redis.
                        </p>

                        <p className="ps-4 text-justify">
                            At the core of GoProgrammingHub.com lies the art of
                            sharing knowledge and creating collective
                            experiences. My motivation stems from my love for
                            technical and non-technical blogs, where I find
                            inspiration from experienced bloggers' compelling
                            stories. This inspiration has materialized into the
                            creation of GoProgrammingHub. As the platform
                            embarks on its journey, focusing on uncovering the
                            intricacies of the Go programming language, expect a
                            trajectory that pushes boundaries.
                        </p>

                        <p className="ps-4 mt-2 text-justify">
                            I want to express my gratitude for your support of
                            GoProgrammingHub.com. I wish you a journey filled
                            with enlightening discoveries and transformative
                            learning.
                        </p>

                        <div className="mt-4">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
