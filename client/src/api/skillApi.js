import API from "./axios";

// GET skills
export const getSkills = async () => {
  const res = await API.get("/skills");
  return res.data?.data || res.data || [];
};

// CREATE skill
export const createSkill = async (data) => {
  const res = await API.post("/skills", data);
  return res.data;
};

// DELETE skill
export const deleteSkill = async (id) => {
  const res = await API.delete(`/skills/${id}`);
  return res.data;
};