import { IPost } from "../../../types";

export const initialPost: IPost[] = [
    {
      author: {
        _id: 'werf',
        avatar: 'https://www.masimmo.ru/foto/albums/NatGeoWild_2011/normal_i_498.jpg',
        name: 'National Geographic'
      },
      content: 'Серебрянная осень в сибири',
      createdAt: '15 минут назад',
      images: [
        'https://i.pinimg.com/originals/d8/99/dd/d899dd52beb36db7ab620f4b976d18e5.jpg',
        'https://vsegda-pomnim.com/uploads/posts/2022-04/1649131051_47-vsegda-pomnim-com-p-prirodnii-landshaft-foto-62.jpg',
        'https://www.wallpaperflare.com/static/688/210/437/landscape-nature-sunset-river-wallpaper.jpg',
        'https://i.pinimg.com/originals/76/34/54/763454db829c433f3ef728766bc7b7ef.jpg',
        'https://rcm62.ru/files/886/886423add96f5ec8f613bba5eaa3a112.jpg'
      ]
    }
  ]