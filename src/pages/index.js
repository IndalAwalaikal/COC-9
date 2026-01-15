import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Data untuk gallery cards
  const gallery = [
    {
      src: "/assets/img/coc 2025-2026/coc1.png",
      alt: "COC 2025-2026 Batch 8",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc4.png",
      alt: "COC 2024-2025 Batch 7",
    },
    {
      src: "/assets/img/coc 2024-2025/Webinar2025Promt.jpeg",
      alt: "COC 2023-2024 Event 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Webinar2025.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc3.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc2.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc1.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2023-2024/coc4.jpg",
      alt: "COC 2023-2024 Event 2",
    },
    {
      src: "/assets/img/coc 2023-2024/coc3.png",
      alt: "COC 2023-2024 Event 3",
    },
    {
      src: "/assets/img/coc 2023-2024/coc2.png",
      alt: "COC 2023-2024 Event 4",
    },
    {
      src: "/assets/img/coc 2023-2024/seminar1.png",
      alt: "COC 2024-2025 Event 1",
    },
    {
      src: "/assets/img/coc 2023-2024/coc1.png",
      alt: "COC 2024-2025 Event 2",
    },
  ];

  return (
    <Layout>
      <div className="wrapper">
        {/* Hero Section */}
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-primary"></div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <Image
                      src="/assets/img/logo.png"
                      width={120}
                      height={120}
                      className="img-fluid"
                      alt="Coconut Open Class Logo"
                      priority
                    />
                    <p className="display-4 text-white">
                      COCONUT OPEN CLASS BATCH 9<br />
                      <br />
                      <sup>
                        Beyond SQL Injection: Modern Web Exploitation di Era API & AI
                      </sup>
                    </p>
                    <div className="btn-wrapper mt-2">
                      <Link
                        href="/dokumentasi"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 mr-2 text-dark"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-image" />
                        </span>
                        <span className="btn-inner--text">
                          Lihat Dokumentasi
                        </span>
                      </Link>
                      <Link
                        href="/formulir"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 text-dark"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-single-copy-04" />
                        </span>
                        <span className="btn-inner--text">Daftar Sekarang</span>
                      </Link>
                    </div>
                    <div className="mt-5">
                      <small className="font-weight-bold mb-0 mr-2 text-white">
                        Made by
                      </small>
                      <Image
                        src="/assets/img/logococonut.png"
                        width={112}
                        height={28}
                        alt="Coconut Computer Club Logo"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container container-lg mt-5 px-3 px-md-5">
          <div className="row">
            {gallery.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 mb-4">
                {/* Card transparan + hover */}
                <div
                  className="card card-lift--hover border-0 overflow-hidden"
                  style={{
                    background: "transparent", // hilangkan background putih
                    boxShadow: "none",
                  }}
                >
                  <div className="gallery-image-wrapper">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{
                        objectFit: "contain", // tampilkan keseluruhan gambar
                        backgroundColor: "transparent", // pastikan tidak ada kotak putih
                      }}
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive styling */}
          <style jsx>{`
            .gallery-image-wrapper {
              width: 100%;
              height: 400px; /* agak besar untuk mobile */
              position: relative;
              overflow: hidden;
            }

            @media (min-width: 768px) {
              .gallery-image-wrapper {
                height: 550px; /* sedang untuk desktop */
              }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
}
