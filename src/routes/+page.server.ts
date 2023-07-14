import jobs from "../data.json";
import type { JobsList } from "../types/models";

const job_list: JobsList = jobs;

export const load = () => {
  return {
    job_list,
  };
};
