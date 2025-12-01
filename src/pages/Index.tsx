import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HistoricalEvent {
  id: number;
  city: string;
  year: number;
  title: string;
  description: string;
  period: 'ancient' | 'tsardom' | 'empire' | 'soviet' | 'modern';
  x: number;
  y: number;
}

interface Period {
  id: string;
  name: string;
  years: string;
  color: string;
  gradient: string;
}

const periods: Period[] = [
  { id: 'ancient', name: 'Древняя Русь', years: '862-1547', color: '#8B5CF6', gradient: 'from-purple-600 to-purple-400' },
  { id: 'tsardom', name: 'Московское царство', years: '1547-1721', color: '#D946EF', gradient: 'from-fuchsia-600 to-fuchsia-400' },
  { id: 'empire', name: 'Российская Империя', years: '1721-1917', color: '#0EA5E9', gradient: 'from-cyan-600 to-cyan-400' },
  { id: 'soviet', name: 'СССР', years: '1922-1991', color: '#F97316', gradient: 'from-orange-600 to-orange-400' },
  { id: 'modern', name: 'Современность', years: '1991-2025', color: '#10B981', gradient: 'from-emerald-600 to-emerald-400' }
];

const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    city: 'Новгород',
    year: 862,
    title: 'Призвание Рюрика',
    description: 'Легендарное событие, положившее начало русской государственности. Варяжский князь Рюрик был призван на княжение в Новгород.',
    period: 'ancient',
    x: 52,
    y: 25
  },
  {
    id: 2,
    city: 'Киев',
    year: 988,
    title: 'Крещение Руси',
    description: 'Князь Владимир Святославич принял христианство в качестве государственной религии, что стало поворотным моментом в истории Руси.',
    period: 'ancient',
    x: 48,
    y: 55
  },
  {
    id: 3,
    city: 'Москва',
    year: 1147,
    title: 'Первое упоминание Москвы',
    description: 'Юрий Долгорукий впервые упоминает Москву в летописи. Это дата считается днем основания города.',
    period: 'ancient',
    x: 55,
    y: 42
  },
  {
    id: 4,
    city: 'Куликово поле',
    year: 1380,
    title: 'Куликовская битва',
    description: 'Великая победа русских войск под командованием Дмитрия Донского над монголо-татарами, положившая начало освобождению Руси.',
    period: 'ancient',
    x: 56,
    y: 48
  },
  {
    id: 5,
    city: 'Москва',
    year: 1547,
    title: 'Венчание Ивана IV на царство',
    description: 'Иван Грозный стал первым русским царем, что ознаменовало начало Московского царства.',
    period: 'tsardom',
    x: 55,
    y: 42
  },
  {
    id: 6,
    city: 'Москва',
    year: 1612,
    title: 'Освобождение Москвы',
    description: 'Народное ополчение Минина и Пожарского освободило Москву от польских интервентов, завершив Смутное время.',
    period: 'tsardom',
    x: 55,
    y: 42
  },
  {
    id: 7,
    city: 'Санкт-Петербург',
    year: 1703,
    title: 'Основание Петербурга',
    description: 'Петр I основал новую столицу России - Санкт-Петербург, ставший "окном в Европу".',
    period: 'empire',
    x: 50,
    y: 28
  },
  {
    id: 8,
    city: 'Бородино',
    year: 1812,
    title: 'Бородинская битва',
    description: 'Крупнейшее сражение Отечественной войны 1812 года между русской и французской армиями.',
    period: 'empire',
    x: 54,
    y: 43
  },
  {
    id: 9,
    city: 'Санкт-Петербург',
    year: 1825,
    title: 'Восстание декабристов',
    description: 'Вооруженное выступление офицеров против самодержавия и крепостничества на Сенатской площади.',
    period: 'empire',
    x: 50,
    y: 28
  },
  {
    id: 10,
    city: 'Петроград',
    year: 1917,
    title: 'Октябрьская революция',
    description: 'Вооруженное восстание большевиков, приведшее к свержению Временного правительства и установлению советской власти.',
    period: 'empire',
    x: 50,
    y: 28
  },
  {
    id: 11,
    city: 'Москва',
    year: 1922,
    title: 'Образование СССР',
    description: 'Создание Союза Советских Социалистических Республик - нового государства на территории бывшей Российской империи.',
    period: 'soviet',
    x: 55,
    y: 42
  },
  {
    id: 12,
    city: 'Сталинград',
    year: 1943,
    title: 'Сталинградская битва',
    description: 'Переломное сражение Великой Отечественной войны, закончившееся победой СССР и изменившее ход войны.',
    period: 'soviet',
    x: 62,
    y: 52
  },
  {
    id: 13,
    city: 'Байконур',
    year: 1961,
    title: 'Первый полет человека в космос',
    description: 'Юрий Гагарин совершил первый в истории полет человека в космос на корабле "Восток-1".',
    period: 'soviet',
    x: 75,
    y: 54
  },
  {
    id: 14,
    city: 'Москва',
    year: 1991,
    title: 'Распад СССР',
    description: 'Беловежские соглашения привели к прекращению существования СССР и образованию СНГ.',
    period: 'modern',
    x: 55,
    y: 42
  },
  {
    id: 15,
    city: 'Сочи',
    year: 2014,
    title: 'Зимние Олимпийские игры',
    description: 'XXII Зимние Олимпийские игры прошли в Сочи, став крупнейшим спортивным событием в истории России.',
    period: 'modern',
    x: 58,
    y: 60
  }
];

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  const filteredEvents = selectedPeriod === 'all'
    ? historicalEvents
    : historicalEvents.filter(event => event.period === selectedPeriod);

  const getPeriodColor = (periodId: string) => {
    return periods.find(p => p.id === periodId)?.color || '#8B5CF6';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
            История России
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Интерактивная карта событий с 862 по 2025 год
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center animate-scale-in">
          <button
            onClick={() => setSelectedPeriod('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedPeriod === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:scale-105'
            }`}
          >
            Все эпохи
          </button>
          {periods.map(period => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedPeriod === period.id
                  ? `bg-gradient-to-r ${period.gradient} text-white shadow-lg scale-105`
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:scale-105'
              }`}
              style={{
                boxShadow: selectedPeriod === period.id ? `0 0 30px ${period.color}80` : 'none'
              }}
            >
              <div className="text-sm font-bold">{period.name}</div>
              <div className="text-xs opacity-80">{period.years}</div>
            </button>
          ))}
        </div>

        <Card className="p-4 md:p-8 bg-white border-slate-300 shadow-2xl animate-scale-in">
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 rounded-xl overflow-hidden border-2 border-slate-400">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="0.05" opacity="0.3" />
                  <line x1="0" y1="0" x2="10" y2="0" stroke="#cbd5e1" strokeWidth="0.05" opacity="0.3" />
                </pattern>
                <linearGradient id="territoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="{getPeriodColor(selectedPeriod)}" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="{getPeriodColor(selectedPeriod)}" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              
              <rect width="100" height="100" fill="url(#gridPattern)" />
              
              <path
                d="M 22,18 L 28,15 L 35,14 L 42,13 L 48,12 L 54,13 L 60,15 L 66,17 L 72,16 L 78,15 L 82,17 L 85,20 L 87,25 L 88,30 L 89,35 L 88,40 L 87,45 L 86,50 L 85,55 L 84,60 L 83,65 L 82,70 L 80,74 L 77,77 L 73,79 L 68,81 L 63,82 L 58,83 L 53,84 L 48,85 L 43,84 L 38,83 L 33,82 L 28,80 L 25,77 L 23,73 L 21,68 L 20,63 L 19,58 L 18,53 L 18,48 L 19,43 L 20,38 L 21,33 L 22,28 L 23,23 Z"
                fill={selectedPeriod === 'all' ? '#fbbf24' : getPeriodColor(selectedPeriod)}
                fillOpacity="0.35"
                stroke="#475569"
                strokeWidth="0.3"
                strokeLinejoin="round"
                className="transition-all duration-500"
              />
              
              <path
                d="M 22,18 L 28,15 L 35,14 L 42,13 L 48,12 L 54,13 L 60,15 L 66,17 L 72,16 L 78,15 L 82,17 L 85,20 L 87,25 L 88,30 L 89,35 L 88,40 L 87,45 L 86,50 L 85,55 L 84,60 L 83,65 L 82,70 L 80,74 L 77,77 L 73,79 L 68,81 L 63,82 L 58,83 L 53,84 L 48,85 L 43,84 L 38,83 L 33,82 L 28,80 L 25,77 L 23,73 L 21,68 L 20,63 L 19,58 L 18,53 L 18,48 L 19,43 L 20,38 L 21,33 L 22,28 L 23,23 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="0.5"
                strokeLinejoin="round"
                strokeDasharray="1.5,1"
                opacity="0.6"
              />
              
              <path
                d="M 24,20 C 26,19 28,18 30,19 C 32,20 34,21 36,20 C 38,19 40,18 42,19 C 44,20 46,22 48,21 C 50,20 52,21 54,22 C 56,23 58,24 60,23"
                stroke="#3b82f6"
                strokeWidth="0.9"
                fill="none"
                opacity="0.5"
                strokeLinecap="round"
              />
              
              <path
                d="M 60,23 C 62,24 64,25 66,26 C 68,27 70,26 72,27"
                stroke="#3b82f6"
                strokeWidth="0.7"
                fill="none"
                opacity="0.4"
                strokeLinecap="round"
              />
              
              <path
                d="M 48,24 C 49,28 50,32 51,36 C 52,40 53,44 54,48 C 55,52 56,56 57,60 C 58,64 58,68 59,72"
                stroke="#3b82f6"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
                strokeLinecap="round"
              />
              
              <path
                d="M 30,38 C 35,39 40,40 45,40 C 50,40 55,41 60,42 C 65,43 70,44 75,46"
                stroke="#3b82f6"
                strokeWidth="0.6"
                fill="none"
                opacity="0.4"
                strokeLinecap="round"
              />
              
              <path
                d="M 25,55 C 28,56 31,57 34,58 C 37,59 40,60 43,60"
                stroke="#3b82f6"
                strokeWidth="0.5"
                fill="none"
                opacity="0.35"
                strokeLinecap="round"
              />
              
              <circle cx="40" cy="20" r="0.4" fill="#60a5fa" opacity="0.6" />
              <circle cx="48" cy="18" r="0.5" fill="#60a5fa" opacity="0.6" />
              <circle cx="65" cy="25" r="0.4" fill="#60a5fa" opacity="0.6" />
              <circle cx="55" cy="50" r="0.45" fill="#60a5fa" opacity="0.6" />
              <circle cx="35" cy="60" r="0.4" fill="#60a5fa" opacity="0.6" />
            </svg>

            {filteredEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-scale-in"
                style={{
                  left: `${event.x}%`,
                  top: `${event.y}%`,
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative">
                    <div 
                      className="w-2 h-2 rounded-full border-2 bg-white transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                      style={{ 
                        borderColor: getPeriodColor(event.period),
                        boxShadow: `0 0 8px ${getPeriodColor(event.period)}80`
                      }}
                    />
                  </div>
                  
                  <div className="mt-1.5 text-center">
                    <div 
                      className="text-[9px] font-bold px-1.5 py-0.5 whitespace-nowrap transition-all duration-300 group-hover:scale-110"
                      style={{
                        color: '#1e293b',
                        fontFamily: 'serif',
                        textShadow: '0 0 3px white, 0 0 5px white'
                      }}
                    >
                      {event.city.toUpperCase()}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {periods.map(period => (
              <div key={period.id} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full border-2 bg-white"
                  style={{ borderColor: period.color }}
                />
                <span className="text-sm text-slate-700 font-medium">{period.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {selectedEvent && (
          <Card className="p-6 md:p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-purple-500/50 shadow-2xl animate-slide-in-right relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${getPeriodColor(selectedEvent.period)}, transparent)`
              }}
            />
            
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="relative space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-pulse-glow flex-shrink-0"
                  style={{ backgroundColor: getPeriodColor(selectedEvent.period) }}
                >
                  {selectedEvent.year}
                </div>
                <div className="flex-1">
                  <Badge
                    className="mb-2"
                    style={{
                      backgroundColor: getPeriodColor(selectedEvent.period),
                      color: 'white'
                    }}
                  >
                    {periods.find(p => p.id === selectedEvent.period)?.name}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedEvent.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-300 mb-3">
                    <Icon name="MapPin" size={16} />
                    <span className="font-semibold">{selectedEvent.city}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="flex gap-2 pt-4">
                <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {selectedEvent.year} год
                </Badge>
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {selectedEvent.city}
                </Badge>
              </div>
            </div>
          </Card>
        )}

        <div className="text-center text-slate-400 text-sm animate-fade-in">
          <p>Выберите период на временной шкале или нажмите на точку на карте</p>
        </div>
      </div>
    </div>
  );
};

export default Index;