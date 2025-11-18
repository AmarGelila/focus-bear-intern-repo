import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function AxiosTask() {
  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 10000,
      headers: { accept: "*/*" },
    });

    function getAuthToken() {
      try {
        const authToken = localStorage.getItem("auth-token");
        if (authToken) return authToken;
        console.warn("NO Authincation token found");
        return null;
      } catch (err) {
        console.log(err);
        return null;
      }
    }

    const controller = new AbortController();

    instance
      .post(
        "/posts",
        {
          title: "Learn Axios",
          body: "Learn Axios Issue From Focus Bear Frontend Intership",
          userId: 3,
        },
        { signal: controller.signal }
      )
      .then((response) => {
        if (response.status === 301 || response.status === 302) {
          const redirectUrl = response.headers.location;
          window.location.href = redirectUrl;
          return;
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    instance.interceptors.request.use(
      (config) => {
        const requestId = uuidv4();
        config.headers["X-Request-ID"] = requestId;
        const authToken = getAuthToken();
        if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
        return config;
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    );

    const abortId = setTimeout(() => {
      controller.abort();
    }, 5000);

    return () => {
      clearTimeout(abortId);
      controller.abort();
    };
  }, []);

  return <div>AxiosTask</div>;
}

export default AxiosTask;
