import React, { useState } from "react";
import Layout from "@/components/Layout";

export default function Formulir() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noTelp: "",
    asalSekolah: "",
    buktiFollow: "",
  });

  // ✅ FORM_ID & URL yang benar
  const GOOGLE_FORM_ID =
    "1FAIpQLSeK-DSl4VgYgZ-fVm81b07Cnp-AH3RdxIRFJ4O1G6vf64Pqiw";
  const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  // ✅ ENTRY ID YANG VALID (dari HTML Anda)
  const FIELD_MAP = {
    namaLengkap: "entry.1155158358",
    email: "entry.397264821",
    noTelp: "entry.1584273566",
    asalSekolah: "entry.69596948",
    buktiFollow: "entry.681245546",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append(FIELD_MAP.namaLengkap, formData.namaLengkap);
    params.append(FIELD_MAP.email, formData.email);
    params.append(FIELD_MAP.noTelp, formData.noTelp);
    params.append(FIELD_MAP.asalSekolah, formData.asalSekolah);
    params.append(FIELD_MAP.buktiFollow, formData.buktiFollow);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // WAJIB untuk Google Form
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      alert("✅ Pendaftaran berhasil! Terima kasih telah mendaftar.");
      setFormData({
        namaLengkap: "",
        email: "",
        noTelp: "",
        asalSekolah: "",
        buktiFollow: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "❌ Gagal mendaftar. Silakan coba lagi atau hubungi panitia via WhatsApp."
      );
    }
  };

  const openWhatsApp = () => {
    const waLink =
      "https://wa.me/6282398309234?text=Halo%20saya%20ingin%20bertanya%20tentang%20informasi%20kegiatan%20Coconut%20Open%20Class%20Batch%209";
    window.open(waLink, "_blank");
  };

  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default"></div>
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-6">
              {/* Bagian Judul Acara - Tetap */}
              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Pendaftaran Berakhir pada Sabtu, 3 February 2024"
                  data-container="body"
                  data-animation="true"
                >
                  COCONUT OPEN CLASS BATCH 9
                </button>
                <h3 className="text-white">
                  <span className="text-white display-4">
                    Beyond SQL Injection: Modern Web Exploitation di Era API &
                    AI
                  </span>
                </h3>
              </div>

              {/* Tabs & Konten tetap sama — dipersingkat untuk fokus pada form */}
              <div className="nav-wrapper">
                <ul
                  className="nav nav-pills nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 active"
                      id="tabs-icons-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-1"
                      role="tab"
                      aria-controls="tabs-icons-text-1"
                      aria-selected="true"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Informasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-2"
                      role="tab"
                      aria-controls="tabs-icons-text-2"
                      aria-selected="false"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Tata Tertib
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-3"
                      role="tab"
                      aria-controls="tabs-icons-text-3"
                      aria-selected="false"
                    >
                      <i className="ni ni-bag-17 mr-2" /> Benefit
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card shadow">
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active tab-fixed"
                      id="tabs-icons-text-1"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-1-tab"
                    >
                      {/* Isi tab tetap seperti aslinya — dipersingkat di sini */}
                      <dl className="description-list">
                        <div className="desc-row">
                          <dt>Tipe</dt>
                          <dd>Open Class</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Pemateri</dt>
                          <dd>Galbi Nadifah</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Moderator</dt>
                          <dd>Bayin Ramadhan</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Materi</dt>
                          <dd>Modern Web Exploitation</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Tempat</dt>
                          <dd>Makassar Creative Hub</dd>
                        </div>
                      </dl>

                      <p className="description">
                        <strong
                          style={{
                            display: "block",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          Tujuan:
                        </strong>
                        Pelatihan ini dirancang untuk memperkenalkan peserta
                        pada lanskap keamanan aplikasi web modern, dengan fokus
                        pada teknik eksploitasi yang berkembang melampaui SQL
                        Injection. Peserta akan mempelajari bagaimana arsitektur
                        API-driven, penggunaan microservices, serta integrasi AI
                        membuka vektor serangan baru yang sering luput dari
                        pengujian keamanan konvensional.
                        <br />
                        <br />
                        Melalui pendekatan praktis dan studi kasus nyata,
                        peserta akan mengeksplorasi berbagai teknik modern web
                        exploitation, seperti penyalahgunaan API, insecure
                        authentication, business logic flaws, serta potensi
                        risiko keamanan yang muncul dari pemanfaatan AI dalam
                        aplikasi web. Workshop ini menekankan pemahaman pola
                        serangan, cara berpikir attacker, serta bagaimana celah
                        keamanan dapat muncul dalam sistem yang terlihat aman
                        secara fungsional.
                        <br />
                        <br />
                        Pada akhir sesi, peserta diharapkan memiliki pemahaman
                        konseptual dan teknis yang lebih matang terhadap ancaman
                        keamanan web masa kini. Bekal ini akan membantu peserta
                        dalam analisis keamanan, pengujian penetrasi, maupun
                        pengembangan aplikasi yang lebih aman, baik untuk
                        kebutuhan akademik, profesional, maupun riset keamanan
                        siber di masa depan.
                      </p>

                      <button type="button" className="btn btn-outline-default">
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        <b>Minggu, 01 Februari 2026</b> 13:00 WITA - Selesai
                      </button>
                      <br />
                      <br />
                      <span>
                        Informasi lebih lanjut hubungi{" "}
                        <span
                          className="text-success font-weight-bold"
                          style={{ cursor: "pointer" }}
                          onClick={openWhatsApp}
                        >
                          Nawat Sakti
                        </span>
                      </span>
                    </div>

                    <div
                      className="tab-pane fade tab-fixed"
                      id="tabs-icons-text-2"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-2-tab"
                    >
                      <h3 className="bold">TATA TERTIB KEGIATAN</h3>
                      <p className="description">
                        <b>1.</b> Hadir 5 menit sebelum kegiatan di mulai <br />
                        <b>2.</b> Mengisi daftar hadir yang telah disediakan
                        panitia <br />
                        <b>3.</b> Mengikuti acara pembukaan <br />
                        <b>4.</b> Menggunakan pakaian yang sopan dan rapih{" "}
                        <br />
                        <b>5.</b> Peserta dilarang membawa senjata tajam dan
                        obat-obatan terlarang
                        <br />
                        <b>6.</b> Peserta dilarang menggunakan HP selama materi
                        berlangsung <br />
                        <b>7.</b> Menjaga ketenangan dan sopan santun <br />
                        <b>8.</b> Peserta wajib memperhatikan materi yang
                        diberikan <br />
                        <b>9.</b> Menjaga Kebersihan dan membuang sampah pada
                        tempatnya <br />
                      </p>
                    </div>

                    <div
                      className="tab-pane fade tab-fixed"
                      id="tabs-icons-text-3"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-3-tab"
                    >
                      <p className="description">
                        <b>Pendaftaran Gratis</b>
                        <br />
                        1. E-Sertifikat <br />
                        2. Modul Pembelajaran <br />
                        3. Ilmu Bermanfaat <br />
                        4. Relasi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULIR — DIPERBARUI */}
            <div className="col-lg-5 mb-lg-auto">
              <div className="transform-perspective-right">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-dark mb-4">
                      <small className="fw-semibold">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary btn-tooltip"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Lengkapi Formulir di Bawah"
                          data-container="body"
                          data-animation="true"
                        >
                          Formulir Pendaftaran
                        </button>
                      </small>
                    </div>

                    <form onSubmit={handleSubmit} id="register-form">
                      {/* Nama Lengkap */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-single-02" />
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Nama Lengkap"
                            name="namaLengkap"
                            className="form-control form-control-lg"
                            value={formData.namaLengkap}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83" />
                            </span>
                          </div>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* No Telepon */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-mobile-button" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="noTelp"
                            placeholder="Masukkan nomor telepon"
                            value={formData.noTelp}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Asal Sekolah */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-building" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="asalSekolah"
                            placeholder="Asal perguruan tinggi"
                            value={formData.asalSekolah}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Link Bukti Follow (ganti upload file) */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-image" />
                            </span>
                          </div>
                          <input
                            type="url"
                            className="form-control form-control-lg"
                            name="buktiFollow"
                            placeholder="Link screenshot follow @coconutdotorg"
                            value={formData.buktiFollow}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Info Biaya */}
                      <br />
                      <small className="text-dark fw-semibold text-uppercase">
                        Pendaftaran kegiatan ini benar-benar gratis! Namun,
                        kalian tetap akan mendapatkan E-sertifikat, relasi
                        pertemanan yang luas, pengalaman berharga, dan tentunya
                        ilmu yang bermanfaat dari pemateri kami. Cukup follow
                        Instagram @coconutdotorg dan lampirkan bukti
                        screenshot-nya saat mendaftar untuk bergabung!
                        <br />
                        <br />
                        Mudah, bukan? Ayo gabung dan nikmati manfaatnya bersama
                        kami!
                      </small>

                      {/* Submit */}
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">
                          Kirim Pendaftaran
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separator separator-bottom separator-skew">
          <svg
            x={0}
            y={0}
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}
