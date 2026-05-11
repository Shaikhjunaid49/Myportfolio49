import API from "./axios";

// GET projects
export const getProjects = async () => {
  try {
    const res = await API.get("/projects");

    // flexible handling
    return res.data?.data || res.data;

  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// CREATE project
export const createProject = async (data) => {
  try {
    const res = await API.post("/projects", data);
    return res.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

// DELETE project
export const deleteProject = async (id) => {
  try {
    const res = await API.delete(`/projects/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};