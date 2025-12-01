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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'serif' }}>
              История России
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Интерактивная карта исторических событий • 862—2025
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center animate-scale-in">
          <button
            onClick={() => setSelectedPeriod('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
              selectedPeriod === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:shadow-lg hover:scale-105'
            }`}
          >
            Все эпохи
          </button>
          {periods.map(period => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                selectedPeriod === period.id
                  ? 'text-white shadow-xl scale-105'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:shadow-lg hover:scale-105'
              }`}
              style={{
                backgroundColor: selectedPeriod === period.id ? period.color : undefined,
                borderColor: selectedPeriod === period.id ? period.color : undefined
              }}
            >
              <div className="text-sm font-bold">{period.name}</div>
              <div className="text-xs opacity-90">{period.years}</div>
            </button>
          ))}
        </div>

        <Card className="p-6 md:p-10 bg-gradient-to-br from-white to-amber-50/30 border-2 border-slate-800 shadow-2xl animate-scale-in">
          <div className="mb-4 pb-3 border-b-2 border-slate-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900" style={{ fontFamily: 'serif' }}>
              Историческая карта территорий
            </h2>
          </div>
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden border-2 border-slate-400 shadow-inner">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 140 90" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.15" floodOpacity="0.25"/>
                </filter>
              </defs>
              
              <rect width="140" height="90" fill="#a8bfd5" />
              
              <path
                d="M 5,15 L 8,13 L 12,12 L 16,13 L 19,15 L 21,18 L 22,22 L 21,26 L 19,29 L 16,31 L 12,32 L 8,31 L 5,29 L 3,26 L 2,22 L 3,18 Z"
                fill="#f5deb3"
                fillOpacity="0.8"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 15,25 L 19,24 L 23,24 L 27,25 L 30,27 L 32,30 L 33,34 L 32,38 L 30,41 L 27,43 L 23,44 L 19,43 L 16,41 L 14,38 L 13,34 L 14,30 Z"
                fill="#b8d4b8"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 20,40 L 23,39 L 27,39 L 30,40 L 33,42 L 35,45 L 36,49 L 35,53 L 33,57 L 30,60 L 27,62 L 23,63 L 19,62 L 16,60 L 14,57 L 13,53 L 14,49 L 16,45 Z"
                fill="#e6ccb3"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 28,54 L 32,53 L 36,53 L 40,54 L 43,56 L 45,59 L 46,63 L 45,67 L 43,70 L 40,72 L 36,73 L 32,72 L 29,70 L 27,67 L 26,63 L 27,59 Z"
                fill="#98d98e"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 13,40 L 17,38 L 21,37 L 25,37 L 29,38 L 32,40 L 34,43 L 35,47 L 34,51 L 32,54 L 29,56 L 25,57 L 21,56 L 18,54 L 16,51 L 15,47 L 16,43 Z"
                fill="#e0b3e0"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 33,28 L 37,27 L 41,27 L 45,28 L 48,30 L 50,33 L 51,37 L 50,41 L 48,44 L 45,46 L 41,47 L 37,46 L 34,44 L 32,41 L 31,37 L 32,33 Z"
                fill="#d4b896"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 38,44 L 42,43 L 46,43 L 51,44 L 55,46 L 58,49 L 60,53 L 61,58 L 60,63 L 58,67 L 55,70 L 51,72 L 46,73 L 42,72 L 38,70 L 35,67 L 33,63 L 32,58 L 33,53 L 35,49 Z"
                fill="#f0c896"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 68,10 L 73,11 L 78,13 L 83,16 L 88,19 L 93,23 L 97,28 L 100,33 L 102,38 L 103,44 L 102,50 L 100,55 L 97,60 L 93,64 L 88,67 L 83,69 L 78,70 L 73,70 L 68,69 L 63,67 L 58,64 L 54,60 L 50,55 L 47,50 L 45,44 L 44,38 L 45,33 L 47,28 L 50,23 L 54,19 L 58,16 L 63,13 L 68,10 Z"
                fill="#e8775e"
                fillOpacity="0.85"
                stroke="#2c1810"
                strokeWidth="0.3"
                strokeLinejoin="round"
              />
              
              <path
                d="M 65,68 L 70,67 L 75,66 L 80,66 L 85,67 L 90,69 L 94,72 L 97,76 L 99,81 L 99,86 L 97,89 L 94,91 L 90,92 L 85,93 L 80,93 L 75,92 L 70,90 L 66,87 L 63,83 L 62,78 L 62,73 L 63,68 Z"
                fill="#d4a574"
                fillOpacity="0.85"
                stroke="#2c1810"
                strokeWidth="0.3"
                strokeLinejoin="round"
              />
              
              <path
                d="M 102,52 L 106,54 L 110,57 L 113,61 L 115,66 L 115,71 L 113,75 L 110,78 L 106,80 L 102,81 L 98,80 L 95,78 L 93,75 L 92,71 L 92,66 L 93,61 L 95,57 L 98,54 Z"
                fill="#f5c77e"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 115,45 L 119,47 L 122,50 L 124,54 L 125,58 L 124,62 L 122,65 L 119,67 L 115,68 L 111,67 L 108,65 L 106,62 L 105,58 L 106,54 L 108,50 L 111,47 Z"
                fill="#e8d4a8"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 52,5 L 48,7 L 45,10 L 43,14 L 42,18 L 43,22 L 45,25 L 48,27 L 52,28 L 56,27 L 59,25 L 61,22 L 62,18 L 61,14 L 59,10 L 56,7 Z"
                fill="#c0d0e8"
                fillOpacity="0.75"
                stroke="#2c1810"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 55,32 Q 58,37 60,34 M 60,34 Q 62,39 64,36 M 64,36 Q 66,41 68,38 M 68,38 Q 70,43 72,40"
                stroke="#6699cc"
                strokeWidth="0.6"
                fill="none"
                opacity="0.7"
              />
              
              <path
                d="M 68,40 Q 70,45 72,43 Q 74,48 76,46 Q 78,51 80,49 Q 82,54 84,52"
                stroke="#6699cc"
                strokeWidth="0.5"
                fill="none"
                opacity="0.7"
              />
              
              <path
                d="M 62,45 Q 64,50 66,53 Q 68,57 70,61 Q 72,65 74,69 Q 76,73 78,77"
                stroke="#6699cc"
                strokeWidth="0.7"
                fill="none"
                opacity="0.7"
              />
              
              <path
                d="M 80,55 Q 82,60 84,58 Q 86,63 88,61 Q 90,66 92,64"
                stroke="#6699cc"
                strokeWidth="0.5"
                fill="none"
                opacity="0.7"
              />
              
              <path
                d="M 25,60 Q 27,63 29,61 Q 31,64 33,62 Q 35,65 37,63"
                stroke="#6699cc"
                strokeWidth="0.4"
                fill="none"
                opacity="0.6"
              />
              
              <path
                d="M 0,50 C 10,52 20,54 30,53 M 0,55 C 12,57 24,59 36,58 M 0,60 C 15,62 30,64 45,63 M 0,65 C 18,67 36,69 54,68"
                stroke="#7db3cc"
                strokeWidth="0.3"
                fill="none"
                opacity="0.5"
                strokeDasharray="1,1"
              />
              
              <path
                d="M 50,0 C 52,10 54,20 55,30 M 60,0 C 62,12 64,24 65,36 M 70,0 C 72,15 74,30 75,45 M 80,0 C 82,18 84,36 85,54"
                stroke="#7db3cc"
                strokeWidth="0.3"
                fill="none"
                opacity="0.5"
                strokeDasharray="1,1"
              />
              
              <text x="70" y="12" fontSize="3" fontFamily="Arial, sans-serif" fill="#cc0000" fontWeight="bold">862</text>
              
              <text x="73" y="38" fontSize="2" fontFamily="Arial, sans-serif" fill="#000000" fontWeight="600">Kievan Rus</text>
              <text x="68" y="28" fontSize="1.8" fontFamily="Arial, sans-serif" fill="#000000">Novgorod</text>
              <text x="66" y="60" fontSize="1.8" fontFamily="Arial, sans-serif" fill="#000000">Kiev</text>
              
              <text x="85" y="76" fontSize="1.8" fontFamily="Arial, sans-serif" fill="#000000">Khazar Khaganate</text>
              <text x="22" y="48" fontSize="1.6" fontFamily="Arial, sans-serif" fill="#000000">Scotland</text>
              <text x="35" y="65" fontSize="1.6" fontFamily="Arial, sans-serif" fill="#000000">Al-Andalus</text>
              <text x="12" y="22" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Norway</text>
              <text x="23" y="35" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Denmark</text>
              <text x="42" y="38" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Francia</text>
              <text x="40" y="58" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Italy</text>
              <text x="54" y="18" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Sweden</text>
              <text x="110" y="60" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Volga Bulgaria</text>
              <text x="118" y="56" fontSize="1.5" fontFamily="Arial, sans-serif" fill="#000000">Pechenegs</text>
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
                      className="w-2 h-2 rounded-full bg-slate-900 border-2 border-white transition-all duration-300 group-hover:scale-150 shadow-lg"
                    />
                  </div>
                  
                  <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                    <div 
                      className="text-[9px] font-bold px-2 py-1 whitespace-nowrap bg-slate-900 text-white border-2 border-white rounded-md shadow-xl"
                      style={{
                        fontFamily: 'serif'
                      }}
                    >
                      {event.city} • {event.year}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-slate-300">
            <h3 className="text-center text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">Легенда</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {periods.map(period => (
                <div key={period.id} className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-300 shadow-sm">
                  <div
                    className="w-4 h-4 rounded border-2 border-slate-700"
                    style={{ backgroundColor: period.color }}
                  />
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900">{period.name}</div>
                    <div className="text-xs text-slate-600">{period.years}</div>
                  </div>
                </div>
              ))}
            </div>
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