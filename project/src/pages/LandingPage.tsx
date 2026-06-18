import { Link } from 'react-router-dom';
import { ChefHat, Search, Heart, Clock } from 'lucide-react';
import Button from '../components/Button';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RecipeHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Discover & Share Amazing Recipes
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community of food lovers. Find recipes, share your culinary creations,
              and connect with other passionate cooks from around the world.
            </p>
            <div className="mt-10">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center">
                  <Search className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Search Recipes
                </h3>
                <p className="mt-2 text-gray-600">
                  Find recipes by ingredients, cuisine, or dietary preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Heart className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Save Favorites
                </h3>
                <p className="mt-2 text-gray-600">
                  Create your personal collection of favorite recipes.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Clock className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Meal Planning
                </h3>
                <p className="mt-2 text-gray-600">
                  Plan your weekly meals and generate shopping lists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;