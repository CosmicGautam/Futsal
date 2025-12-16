export const getCourts = async () => {
  const res = await fetch("/api/courts");
  return res.json();
};
