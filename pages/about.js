import Head from 'next/head'
import Image from 'next/image'
import ContactUsForm from '../components/ContactUsForm'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'

import profilepic from '../public/images/manoj-pawar.jpg'

export default function About() {
    return (
        <>
            <Head>
                <title>About | GoProgrammingHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='container'>
                <div className="row mt-2">

                    <div className="col-md-4 text-center">
                        <Image className="rounded-circle profile-img p-5" alt="Manoj-Pawar-Profile" src={profilepic} />
                        <h3>Manoj Pawar</h3>
                        <hr />
                        <SocialMedia />
                    </div>

                    <div className="col-md-8 pt-5">
                        <h1 className="ps-4">Hello Techie,</h1>
                        <h3 className="ps-4">Thank you for visiting the GoProgrammingHub.com!</h3>
                        <p className="ps-4 pt-3 text-justify">I am a passionate software developer. I have industry experience in various backend technologies like GoLang, Gin, Java, Spring boot, JPA, Python and the frontend technologies like Angular, React, Bootstrap, Material Design Framework, CSS3, HTML5, and the database technologies like Oracle, MySQL, MongoDB, Redis.</p>

                        <p className="ps-4 text-justify">The motive of GoProgrammingHub.com is to share knowledge and experience. I always read technical and non-technical blogs on the internet. I like the way people (bloggers) express themself in the blog. It has inspired me to start GoProgrammingHub. Though I am taking the first step by posting about the Go programming language, it will not be limited.</p>

                        <p className="ps-4 mt-2 text-justify">Thank you for visiting and supporting GoProgrammingHub.com! Wish you happy learning!</p>

                        <p className="ps-4 mt-4 text-justify">GoProgrammingHub.com developed using the technologies,</p>

                        <div className="ps-4">
                            <ul>
                                <li>NextJs</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <ContactUsForm />
                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}
