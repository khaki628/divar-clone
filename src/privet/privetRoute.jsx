import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../assets/animation/loading";
import { admodalshow } from "../recoil/atom";
import { useRecoilState } from "recoil";

const PrivetRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [auth, setauth] = useState(false);
  const token = localStorage.getItem("token");
  const [adpageModal, setadpageModal] = useRecoilState(admodalshow);

  useEffect(() => {
    axios
      .post("http://45.139.10.149:1001/api/authorize", {
        token,
      })
      .then((res) => {
        console.log(res);
        setauth(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/main-Page");
        setadpageModal(!adpageModal);
      })
      .finally(() => {
        setTimeout(() => {
          setloading(false);
        }, 1000);
      });
  }, []);

  return loading ? <Loading /> : auth ? children : navigate("/Advertising");
};

export default PrivetRoute;
