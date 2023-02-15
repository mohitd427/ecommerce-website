import axios from "axios";

const BASE_URL = "http://localhost:8080/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTRlMGM0NWRiMDFmNGNkMzY5MDU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjMyMDE4OCwiZXhwIjoxNjc2NTc5Mzg4fQ.S37b_ovBWihjfpV0fNlzYoRUzwb7Wjns64ZnWE0j5k0";

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization:`Bearer ${TOKEN}` },
});
