export const invitation = {
  groom: {
    name: "Gilang Dwi Amardan",
    short: "Gilang",
    parents: "Putra kedua dari Bapak Amardan & Ibu Suryani",
    instagram: "@gilangamardan",
  },
  bride: {
    name: "Silva Ria Dinasty",
    short: "Silva",
    parents: "Putri pertama dari Bapak Hendarto & Ibu Larasati",
    instagram: "@silvariadinasty",
  },
  year: "2027",
  weddingDate: "2027-06-12T09:00:00+07:00",
  verse: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum : 21",
  },
  story: [
    {
      year: "2019",
      title: "Pertemuan Pertama",
      text: "Berawal dari sebuah perjalanan ke kebun raya, dua langkah yang berbeda arah akhirnya berhenti di taman yang sama.",
    },
    {
      year: "2021",
      title: "Tumbuh Bersama",
      text: "Seperti tanaman tropis yang perlahan meninggi, kami belajar sabar, saling menaungi, dan bertumbuh di musim apa pun.",
    },
    {
      year: "2024",
      title: "Melamar di Bawah Kanopi",
      text: "Di antara rimbun dedaunan dan cahaya pagi, sebuah pertanyaan diucapkan — dan dijawab dengan air mata bahagia.",
    },
    {
      year: "2027",
      title: "Menuju Janji Suci",
      text: "Dengan restu keluarga, kami melangkah ke babak baru yang kami rawat seumur hidup.",
    },
  ],
  events: [
    {
      title: "Akad Nikah",
      date: "Sabtu, 12 Juni 2027",
      time: "09.00 - 11.00 WIB",
      place: "Rumah Kaca Botanika",
      address: "Jl. Kebun Raya No. 12, Bogor, Jawa Barat",
      maps: "https://maps.google.com/?q=Kebun+Raya+Bogor",
    },
    {
      title: "Resepsi",
      date: "Sabtu, 12 Juni 2027",
      time: "13.00 - 17.00 WIB",
      place: "Tropical Garden Pavilion",
      address: "Jl. Kebun Raya No. 12, Bogor, Jawa Barat",
      maps: "https://maps.google.com/?q=Kebun+Raya+Bogor",
    },
  ],
  media: {
    prewedding: "https://www.youtube.com/embed/ScMzIvxBSi4",
    live: {
      title: "Live Akad & Resepsi",
      date: "Sabtu, 12 Juni 2027",
      time: "Mulai 09.00 WIB",
      url: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    },
  },

  gifts: {
    transfers: [
      { bank: "Bank Mandiri", number: "1370 0099 8877", holder: "Gilang Dwi Amardan" },
      { bank: "Bank BCA", number: "8820 4471 09", holder: "Silva Ria Dinasty" },
    ],
    address: {
      name: "Silva Ria Dinasty",
      detail: "Jl. Melati Hijau No. 21, Bogor Tengah, Jawa Barat 16121",
      phone: "0812-3456-7890",
    },
  },
};

export type Wish = {
  id: string;
  name: string;
  title?: string | undefined;
  attendance: "hadir" | "tidak" | "ragu";
  guests: number;
  message: string;
  createdAt: number;
};

export const seedWishes: Wish[] = [
  {
    id: "w1",
    name: "Silva Anindita",
    title: "Dr.",
    attendance: "hadir",
    guests: 2,
    message:
      "Selamat menempuh hidup baru, Gilang & Silva. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    createdAt: Date.now() - 86400000 * 3,
  },
  {
    id: "w2",
    name: "Raka Pramudya",
    title: "Ir.",
    attendance: "ragu",
    guests: 1,
    message: "Bahagia selalu ya kalian berdua. Semoga bisa hadir dan ikut merayakan hari besarnya!",
    createdAt: Date.now() - 86400000,
  },
];
