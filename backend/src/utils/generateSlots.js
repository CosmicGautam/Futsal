// backend/src/utils/generateSlots.js

export const generateSlots = () => {
  // Generate 1-hour time slots from 8 AM to 8 PM
  const slots = [];
  
  for (let hour = 8; hour <= 20; hour++) {
    const time = `${hour.toString().padStart(2, '0')}:00`;
    slots.push(time);
  }
  
  return slots;
};

// Alternative: You can customize your time slots here
// For example, if you want different slots:
/*
export const generateSlots = () => {
  return [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00"
  ];
};
*/