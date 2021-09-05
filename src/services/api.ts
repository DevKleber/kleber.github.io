import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NOTION_URL,
  headers: {
    "Notion-Version": process.env.NOTION_VERSION,
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NOTION_API}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, data } = error.response;
    console.log(data.error);

    switch (status) {
      case 500:
        alert(data.message);
        break;
      case 400:
        switch (data.error) {
          case `"Token is Invalid"`:
            alert(data.error);
            break;
          default:
            if (data.message) {
              alert(data.message);
            }
            if (data.error) {
              alert(data.error);
            }

            break;
        }

        break;

      case 401:
        if (data.response) {
          alert(data.message);
        }

        if (data.message) {
          alert(data.message);
        }
        if (data.error) {
          if (data.error === "Unauthorized") {
            alert("Usuário ou senha inválida!");
          } else {
            alert(data.message);
          }
        }

        break;
      case 405:
        alert(data.message);

        break;
      default:
        break;
    }

    throw error;
  }
);
