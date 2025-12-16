export const getSlots = async (courtId, date) => {
  const res = await fetch(
    `/api/bookings/slots?courtId=${courtId}&date=${date}`
  );
  return res.json();
};

export const createBooking = async (data, token) => {
  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const myBookings = async (token) => {
  const res = await fetch("/api/bookings/my", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};
