export default function handler(req, res) {
  const { query } = req.query;

  const database = [
    { id: 1, name: "iPhone 13" },
    { id: 2, name: "Samsung Galaxy S21" },
    { id: 3, name: "Xiaomi Redmi Note 10" },
    { id: 4, name: "iPhone 14" },
  ];

  const filteredResults = database.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(filteredResults);
}
