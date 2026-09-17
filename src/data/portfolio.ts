/* =========================================================
   SERTIFIKAT
   ========================================================= */

import Certificate01 from "../assets/sertifikat/Sertifikat_webinar.jpg";
import Certificate02 from "../assets/sertifikat/Sertifikat_CARBON2.jpg";
import Certificate03 from "../assets/sertifikat/Sertifikat_INSIGHT.jpg";
import Certificate04 from "../assets/sertifikat/Setrifikat_Pengembangan Kota.jpg";
import Certificate05 from "../assets/sertifikat/Sertifikat_winning in 2034.jpg";

/* =========================================================
   WEB VISUAL
   ========================================================= */

import project_1 from "../assets/web visual/ngesti manunggal.jpg";
import project_2 from "../assets/web visual/pawon'e-simbah.jpg";

/* =========================================================
   ARSITEKTUR
   ========================================================= */

import Project001 from "../assets/work/banguan1.jpg";
import Project002 from "../assets/work/bangunan model 09.jpg";
import Project003 from "../assets/work/bangunan_potongnan.jpg";
import Project004 from "../assets/work/bg2.jpg";
import Project005 from "../assets/work/banguan_potongan.jpg";
import Project006 from "../assets/work/bg3.jpg";
import Project007 from "../assets/work/bangunan_potongan1.jpg";
import Project008 from "../assets/work/bg1.jpg";
import Project009 from "../assets/work/denah atas.jpg";
import Project0010 from "../assets/work/tampak depan.jpg";
import Project0011 from "../assets/work/bangunan model 02.jpg";
import Project0012 from "../assets/work/tampak depan1.jpg";
import Project0013 from "../assets/work/bangunan model 06.jpg";
import Project0014 from "../assets/work/tampak depan2.jpg";
import Project0015 from "../assets/work/bangunan model 08.jpg";

/* =========================================================
   STREET PHOTOGRAPHY
   ========================================================= */

import Project1 from "../assets/fotografi/foto 1.jpg";
import Project2 from "../assets/fotografi/foto 3.jpg";
import Project3 from "../assets/fotografi/foto 6.jpg";
import Project4 from "../assets/fotografi/foto 8.jpg";
import Project5 from "../assets/fotografi/foto 9.jpg";
import Project6 from "../assets/fotografi/foto 12.jpg";

/* =========================================================
   SOSIAL
   ========================================================= */

import Project01 from "../assets/sosial/kegiatan solo1.jpg";
import Project02 from "../assets/sosial/kegiatan solo2.jpg";
import Project03 from "../assets/sosial/kegiatan solo3.jpg";
import Project04 from "../assets/sosial/kegiatan solo4.jpg";

/* =========================================================
   HELPER UNTUK FILE PDF
   =========================================================
   
   PDF berada di:
   
   public/Sertifikat/
   
   encodeURIComponent() digunakan agar:
   - spasi aman
   - tanda # aman
   - tanda kurung aman
   - karakter khusus aman
   
   Nama file PDF tetap dipertahankan.
   ========================================================= */

const certificatePdf = (fileName: string) =>
  `${import.meta.env.BASE_URL}Sertifikat/${encodeURIComponent(fileName)}`;

/* =========================================================
   NAVIGATION
   ========================================================= */

export const NAV_LINKS = ["Home", "About", "Work", "Contact"];

/* =========================================================
   SKILLS
   ========================================================= */

export const SKILLS = [
  "UI/UX Design",
  "Architectural Designer",
  "Web Development",
  "Social",
  "Typography",
  "Photography",
];

/* =========================================================
   CERTIFICATES
   ========================================================= */

export const CERTIFICATES = [
  {
    title: "SERTIFIKAT WEBINAR STRATEGI PENGELOLAAN SUNGAI DI INDONESIA",

    year: "2023",

    image: Certificate01,

    pdf: certificatePdf(
      "Sertifikat webinar_Strategi Pengelolaan Sungai di Indonesia.pdf",
    ),
  },

  {
    title:
      "SERTIFIKAT CARBON #2 STARTENGGI PELAKU USAHA KEMBANGKAN INOVASI LINGKUNGAN - INOVASI SOSIAL",

    year: "2023",

    image: Certificate02,

    pdf: certificatePdf(
      "Sertifikat_CARBON #2 Startegi Pelaku Usaha Kembangkan Inovasi Lingkungan - Inovasi Sosial.pdf",
    ),
  },

  {
    title:
      "SERTIFIKAT INSIGHT (INSPIRASI GAYA HIDUP BERINTEGRITAS) DALAM PELAYANAN PUBLIK",

    year: "2023",

    image: Certificate03,

    pdf: certificatePdf(
      "Sertifikat_INSIGHT (inspirasi gaya hidup berintegritas) dalam pelayanan publik.pdf",
    ),
  },

  {
    title:
      "SERTIFIKAT SEMINAR NASIONAL PENGEMBANGAN KOTA BERDASARKAN TRANSIT ORIENTED DEVELOPMENT (TOD) DAN PENERAPAN POLA INTENSIF DAN DISINSENTIF",

    year: "2023",

    image: Certificate04,

    pdf: certificatePdf(
      "Sertifikat_Seminar Nasional Pengembangan Kota Berdasarkan Transit Oriented Development (TOD) dan Penerapan Pola Intensif dan Disinsentif.pdf",
    ),
  },

  {
    title:
      "SERTIFIKAT WINNING IN DESRUPTIVE ERA SIAP MENUJU INDONESIA MANDIRI 2034",

    year: "2018",

    image: Certificate05,

    pdf: certificatePdf(
      "Sertifikat_winning in desruptive era siap menuju indonesia mandiri 2034.pdf",
    ),
  },
] as const;

/* =========================================================
   WORKS / PORTFOLIO
   ========================================================= */

export const WORKS = [
  /* =======================================================
     CASE STUDY 01
     ======================================================= */

  {
    id: "01",

    title: "NGESTI MANUNGGAL",

    category: "Web Development",

    year: "2024",

    image: project_1,

    accent: "#E83A2C",

    url: "https://ramadha4164.github.io/Muda_mudi/",
  },

  /* =======================================================
     CASE STUDY 02
     ======================================================= */

  {
    id: "02",

    title: "Pawon'e Simbah",

    category: "Web Development",

    year: "2024",

    image: project_2,

    accent: "#0A0A0A",

    url: "https://ramadha4164.github.io/pawon-e-simbah/",
  },

  /* =======================================================
     CASE STUDY 03
     ======================================================= */

  {
    id: "03",

    title: "Certificates",

    category: "Certificates",

    year: "2018–2023",

    image: Certificate01,

    certificates: CERTIFICATES,

    accent: "#E83A2C",

    url: "#",
  },

  /* =======================================================
     CASE STUDY 04
     STREET PHOTOGRAPHY
     ======================================================= */

  {
    id: "04",

    title: "street photography",

    category: "Photography",

    year: "2023",

    // Cover utama
    image: Project1,

    // Isi case study
    gallery: [Project1, Project2, Project3, Project4],

    accent: "#0A0A0A",

    url: "#",
  },

  /* =======================================================
     CASE STUDY 05
     WORLD CLEANUP DAY IN SOLO
     ======================================================= */

  {
    id: "05",

    title: "World Cleanup Day in Solo",

    category: "Social",

    year: "2019",

    // Cover utama
    image: Project04,

    // Isi case study
    gallery: [Project01, Project02, Project03, Project04],

    accent: "#E83A2C",

    url: "#",
  },

  /* =======================================================
     CASE STUDY 06
     INDUSTRIAL TROPIS
     ======================================================= */

  {
    id: "06",

    title: "Industrial Tropis",

    category: "Architectural Designer",

    year: "2025",

    // Cover utama
    image: Project0015,

    // Isi case study
    gallery: [
      Project001,
      Project002,
      Project003,
      Project004,
      Project005,
      Project006,
      Project007,
      Project008,
      Project009,
      Project0010,
      Project0011,
      Project0012,
      Project0013,
      Project0014,
      Project0015,
    ],

    accent: "#E83A2C",

    url: "",
  },
] as const;

/* =========================================================
   MARQUEE
   ========================================================= */

export const MARQUEE_ITEMS = [
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
];
