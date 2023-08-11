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
                            I am an ardent software developer, driven by an
                            insatiable passion for innovation. My professional
                            journey boasts a rich tapestry of backend
                            technologies, including GoLang, Gin, Java, Spring
                            Boot, JPA, and Python. Equally proficient in the
                            frontend realm, I navigate through Angular, React,
                            Bootstrap, Material Design Framework, CSS3, and
                            HTML5 with finesse. In the realm of databases, I
                            command a versatile skill set spanning Oracle,
                            MySQL, MongoDB, and Redis.
                        </p>

                        <p className="ps-4 text-justify">
                            The nucleus of GoProgrammingHub.com revolves around
                            the art of knowledge dissemination and the
                            orchestration of shared experiences. Fueling my
                            pursuit is an avid appetite for technical and
                            non-technical blogs, an avenue through which I draw
                            inspiration from the captivating narratives crafted
                            by seasoned bloggers. This wellspring of inspiration
                            has crystallized into the genesis of
                            GoProgrammingHub. As its voyage takes flight with a
                            focus on unraveling the intricacies of the Go
                            programming language, anticipate a trajectory that
                            transcends boundaries.
                        </p>

                        <p className="ps-4 mt-2 text-justify">
                            Gratitude flows for your patronage and support
                            extended to GoProgrammingHub.com. I extend to you my
                            heartfelt wishes for a journey brimming with
                            enlightening discoveries and transformative
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
