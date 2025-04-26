import { Globe, MapPin, Users } from "lucide-react";

interface CountryInfoProps {
  name: string;
  officialName: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flagUrl: string;
}

const CountryInfo = ({
  name,
  officialName,
  capital,
  region,
  subregion,
  population,
  flagUrl,
}: CountryInfoProps) => {
  return (
    <div className="absolute inset-x-0 top-[64px] bottom-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-auto">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src={flagUrl}
            alt={`Flag of ${name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="space-y-6">
            {/* Country Names Section */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{name}</h1>
              <p className="text-lg text-gray-600 italic">{officialName}</p>
            </div>

            {/* Geographic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-500">Region</p>
                  <p className="font-medium text-gray-900">{region}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-500">Subregion</p>
                  <p className="font-medium text-gray-900">{subregion}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-500">Population</p>
                  <p className="font-medium text-gray-900">
                    {new Intl.NumberFormat().format(population)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-500">Capital</p>
                  <p className="font-medium text-gray-900">{capital}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;