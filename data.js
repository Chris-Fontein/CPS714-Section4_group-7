// backend/data.js
export const events = [
  {
    id: 1,
    name: "Tech Career Fair",
    rsvps: 120,
    attendance: 95,
    feedback: [
      { rating: 5, comment: "Amazing event!" },
      { rating: 4, comment: "Great companies." },
      { rating: 3, comment: "It was okay." }
    ],
    audience: [
      { major: "Computer Science", college: "Engineering" },
      { major: "Software Engineering", college: "Engineering" },
      { major: "Business", college: "Business School" }
    ]
  },
  {
    id: 2,
    name: "Art Club Workshop",
    rsvps: 30,
    attendance: 22,
    feedback: [
      { rating: 4, comment: "Fun workshop!" },
      { rating: 5, comment: "Loved it!" }
    ],
    audience: [
      { major: "Fine Arts", college: "Arts" },
      { major: "Design", college: "Arts" }
    ]
  }
];
