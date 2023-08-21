import request from "@/utils/request";

// 上传图片
export const chatCompletion = (params: any) => {
  return request({ url: "/v1/chat/completions", method: "POST", data: params });
};
