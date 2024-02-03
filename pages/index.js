import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { getAllPosts, getAuthorBySlug } from "../lib/api";
import AppHead from "../components/AppHead";
import Image from "next/image";

export default function Home({ dsaPosts, problemSolvingPosts }) {
  return (
    <>
      <AppHead title={""} />
      <Navbar />
      <main className="container-fluid">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image
                className="d-block w-100"
                alt={`Golang Tutorial`}
                src={`/images/golang-bg.jpg`}
                width="100"
                height="50"
                layout="responsive"
              />
              <div class="carousel-caption d-sm-block">
                <h1 className="mb-4 bg-dark bg-transparent">Golang Tutorial</h1>
                <p>
                  <a
                    className="btn btn-primary btn-sm stretched-link"
                    href="/posts/programming/golang/01-Introduction-to-Go-Language"
                  >
                    Start Learning!
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                className="d-block w-100"
                alt={`Python Tutorial`}
                src={`/images/python-bg.png`}
                width="100"
                height="50"
                layout="responsive"
              />
              <div class="carousel-caption d-sm-block">
                <h1 className="mb-4 bg-dark bg-transparent">Python Tutorial</h1>
                <p>
                  <a
                    className="btn btn-primary btn-sm stretched-link"
                    href="/posts/programming/python/01-Introduction-to-Python"
                  >
                    Start Learning!
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                className="d-block w-100"
                alt={`Apache Spark Tutorial`}
                src={`/images/apaches-spark-bg.webp`}
                width="100"
                height="50"
                layout="responsive"
              />
              <div class="carousel-caption d-sm-block">
                <h1 className="mb-4 bg-dark bg-transparent">Apache Spark Tutorial</h1>
                <p>
                  <a
                    className="btn btn-primary btn-sm stretched-link"
                    href="/posts/bigdata/apache-spark/01-introduction-to-apache-spark"
                  >
                    Start Learning!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      /* dsaPosts: getAllPosts("/_data-structures-and-algorithms").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),*/
      problemSolvingPosts: getAllPosts("/_problemsolving").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
