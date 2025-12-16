export const generateSlots = () => {
  const slots = [];
  for (let h = 8; h < 20; h++) {
    const start = `${String(h).padStart(2, "0")}:00`;
    const end = `${String(h + 1).padStart(2, "0")}:00`;
    slots.push(`${start}-${end}`);
  }
  return slots;
};
