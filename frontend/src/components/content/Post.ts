export type Post = {
  id: number;
  Username: string;
  account: string;
  detail: string;
  path: string;
};

export const postData: Post[] = [
  {
    id: 1,
    Username: "Google Chrome",
    account: "Happy",
    detail:
      "Fexcel is Google Chrome extension that will help you to be professional in Excel !",
    path: "https://i.pinimg.com/736x/18/7f/8b/187f8b55285f5dbaf2fb5b7f30d6c3bb.jpg",
  },
  {
    id: 2,
    Username: "Excel",
    account: "sad",
    detail:
      "Fexcel is Google Chrome extension that will help you to be professional in Excel !",
    path: "https://6.soompi.io/wp-content/uploads/image/eede4bbd419647faa049931eb3184d08.jpeg?s=900x600&e=t",
  },
  {
    id: 3,
    Username: "Excel",
    account: "Neutral",
    detail:
      "Fexcel is Google Chrome extension that will help you to be professional in Excel !",
    path: "https://www.allkpop.com/upload/2023/04/content/180144/web_data/allkpop_1681796882_20230408-jaehyun.jpeg",
  },
];
