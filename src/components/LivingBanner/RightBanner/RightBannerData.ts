export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
};

export const rightBannerData: Testimonial[] = [
  {
    id: 1,
    quote:
      "A Place Called Home gave me more than a room, it gave me hope, support, and a family.",
    author: "James T.",
    role: "Resident",
    image: "/james.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "From the moment I arrived, I felt welcomed, respected, and cared for.",
    author: "Maria L.",
    role: "Resident",
    image: "/maria.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "This community gave me a safe place to rebuild my life and move forward.",
    author: "David R.",
    role: "Veteran",
    image: "/david.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "I found comfort, friendship, and peace of mind when I needed it most.",
    author: "Sarah W.",
    role: "Resident",
    image: "/sara.jpg",
    rating: 5,
  },
];