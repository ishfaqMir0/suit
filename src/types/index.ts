export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  farmName: string;
  avatar?: string;
}

export interface Field {
  id: string;
  name: string;
  area: number;
  cropStage: 'Planting' | 'Growing' | 'Flowering' | 'Fruiting' | 'Harvesting';
  healthStatus: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  location: string;
  plantedDate: string;
}

export interface DashboardStats {
  totalFields: number;
  healthyTrees: number;
  alerts: number;
  weather: string;
}