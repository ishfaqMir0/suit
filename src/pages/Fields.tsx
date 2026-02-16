import React, { useState } from 'react';
import { Plus, Search, ListFilter as Filter, MapPin, Calendar } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { mockFields } from '../data/mockData';
import { Field } from '../types';

const Fields: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fields] = useState<Field[]>(mockFields);

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent':
        return 'bg-green-100 text-green-800';
      case 'Good':
        return 'bg-blue-100 text-blue-800';
      case 'Fair':
        return 'bg-yellow-100 text-yellow-800';
      case 'Poor':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCropStageColor = (stage: string) => {
    switch (stage) {
      case 'Planting':
        return 'bg-amber-100 text-amber-800';
      case 'Growing':
        return 'bg-green-100 text-green-800';
      case 'Flowering':
        return 'bg-pink-100 text-pink-800';
      case 'Fruiting':
        return 'bg-orange-100 text-orange-800';
      case 'Harvesting':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredFields = fields.filter(field =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Fields Management</h1>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add New Field</span>
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search fields..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>
      </Card>

      {/* Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFields.map((field) => (
          <Card key={field.id} className="p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{field.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {field.location}
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthStatusColor(field.healthStatus)}`}>
                {field.healthStatus}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Area:</span>
                <span className="text-sm font-medium text-gray-900">{field.area} acres</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Crop Stage:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCropStageColor(field.cropStage)}`}>
                  {field.cropStage}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Planted:</span>
                <div className="flex items-center text-sm text-gray-900">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(field.plantedDate).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                View Details
              </Button>
              <Button size="sm" className="flex-1">
                Edit Field
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredFields.length === 0 && (
        <Card className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No fields found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding your first field.'}
          </p>
          <Button>Add New Field</Button>
        </Card>
      )}
    </div>
  );
};

export default Fields;