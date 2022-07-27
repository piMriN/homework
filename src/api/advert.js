import request from "@/utils/request";

const getAdvertList = (data) => {
  return request({
    url: "/article/advert/search",
    method: "POST",
    data,
  });
};

export default {
  getAdvertList,
};
