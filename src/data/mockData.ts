import type { User, Field, DashboardStats } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@applefarm.com',
  phone: '+1 (555) 123-4567',
  farmName: 'Green Valley Apple Farm',
};

export const mockFields: Field[] = [
  {
    id: '1',
    name: 'North Orchard',
    area: 25.5,
    cropStage: 'Fruiting',
    healthStatus: 'Excellent',
    location: 'North Section',
    plantedDate: '2020-03-15',
  },
  {
    id: '2',
    name: 'South Orchard',
    area: 18.2,
    cropStage: 'Growing',
    healthStatus: 'Good',
    location: 'South Section',
    plantedDate: '2021-04-10',
  },
  {
    id: '3',
    name: 'East Field',
    area: 32.1,
    cropStage: 'Flowering',
    healthStatus: 'Fair',
    location: 'East Section',
    plantedDate: '2019-05-20',
  },
  {
    id: '4',
    name: 'West Field',
    area: 22.8,
    cropStage: 'Harvesting',
    healthStatus: 'Excellent',
    location: 'West Section',
    plantedDate: '2018-03-25',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalFields: 4,
  healthyTrees: 1250,
  alerts: 3,
  weather: 'Sunny, 72°F',
};