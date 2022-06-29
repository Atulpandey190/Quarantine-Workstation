import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const SERVER = "https://quarantine-workstation-server.herokuapp.com/";
  useEffect(() => {
    console.log("authenticating user", code);
    axios
      .post(`${SERVER}/login`, {
        code,
      })
      .then((res) => {
        console.log(res);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        //window.history.pushState({}, null, "/dashboard");
      })
      .catch((err) => {
        console.log(err);
        //window.location = "/dashboard";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${SERVER}/refresh`, {
          refreshToken,
        })
        .then((res) => {
          console.log("refreshing 1", res);
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })

        .catch((err) => {
          console.log(err);
          //window.location = "/dashboard";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);
  return accessToken;
};

export default useAuth;
