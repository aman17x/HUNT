let currentIndex = 0;

export default function handler(req, res) {
  const codes = ["SEASON", "TRAVEL", "RACE", "JHOPE", "PROS"];
  const assigned = codes[currentIndex];

  currentIndex = (currentIndex + 1) % codes.length;

  res.status(200).json({ route: assigned });
}
