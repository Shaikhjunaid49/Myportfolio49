import API from "./axios";

// send contact message
export const sendMessage = async (data) => {
  const res = await API.post("/contact", data);
  return res.data;
};

// get all messages (admin)
export const getMessages = async () => {
  const res = await API.get("/contact");

  // ✅ ALWAYS return array
  return res.data?.data || res.data || [];
};