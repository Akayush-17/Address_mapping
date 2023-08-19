// mock-profiles.ts
import { Profile } from '../models/profile.models';

export const MOCK_PROFILES: Profile[] = [
  {
    name: 'John Doe',
    photo: 'https://cdn.hackaday.io/images/3553251501638077867.png',
    description: 'Web Developer',
    address: '123 Main St, Cityville, USA'
  },
  {
    name: 'Jane Smith',
    photo: 'http://4.bp.blogspot.com/-PNha6LAMLEs/TgCzDkHsq1I/AAAAAAAABz8/rKtdCGOmHs8/s1600/Beautiful+Facebook+Profile+%25287%2529.jpg',
    description: 'Graphic Designer',
    address: '456 Elm Ave, Townsville, USA'
  },
  {
    name: 'Michael Johnson',
    photo: 'https://cdn.shopify.com/s/files/1/0486/2099/4727/files/image-9.jpg?v=1600754959',
    description: 'Software Engineer',
    address: '789 Oak Rd, Villagetown, USA'
  },
  {
    name: 'Emily Williams',
    photo: 'https://www.dontwasteyourmoney.com/wp-content/uploads/2017/08/AdobeStock_86346694.jpeg',
    description: 'UI/UX Designer',
    address: '101 Pine Dr, Countryside, USA'
  },
  {
    name: 'David Brown',
    photo: 'https://4x4photo.ru/wp-content/uploads/2022/12/10027-2-2048x1365.jpg',
    description: 'Data Scientist',
    address: '555 Maple St, Suburbia, USA'
  }
];
