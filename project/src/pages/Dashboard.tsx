import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, BookOpen, Heart, Calendar, LogOut, Plus } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RecipeHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => {}}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Recipe
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <BookOpen className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="font-semibold">My Recipes</h3>
            <p className="text-sm text-gray-600">0 recipes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Heart className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="font-semibold">Favorites</h3>
            <p className="text-sm text-gray-600">0 saved</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Calendar className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="font-semibold">Meal Plan</h3>
            <p className="text-sm text-gray-600">Plan your week</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recipe cards will be populated here */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                alt="Healthy Salad"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Healthy Mediterranean Salad</h3>
                <p className="text-sm text-gray-600 mt-1">
                  A fresh and healthy salad with Mediterranean ingredients.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">20 mins</span>
                  <Button variant="outline" size="sm">
                    View Recipe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;