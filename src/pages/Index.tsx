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
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-amber-50 to-blue-50 rounded-lg overflow-hidden border-3 border-slate-800 shadow-inner">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" width="5" height="5" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="5" stroke="#000000" strokeWidth="0.03" opacity="0.15" />
                  <line x1="0" y1="0" x2="5" y2="0" stroke="#000000" strokeWidth="0.03" opacity="0.15" />
                </pattern>
              </defs>
              
              <rect width="100" height="100" fill="#fefefe" />
              <rect width="100" height="100" fill="url(#gridPattern)" />
              
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.2" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              <path
                d="M 48,18 L 50,20 L 52,19 L 55,21 L 55,35 L 53,38 L 48,38 L 48,18 Z"
                fill="#ffb3ba"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 48,38 L 53,38 L 55,40 L 55,52 L 52,55 L 48,55 L 45,52 L 45,40 L 48,38 Z"
                fill="#ffffba"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 55,35 L 58,35 L 62,33 L 65,35 L 68,33 L 70,35 L 72,38 L 70,42 L 68,45 L 65,48 L 62,50 L 58,52 L 55,52 L 55,40 L 55,35 Z"
                fill="#bae1ff"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 30,30 L 35,28 L 40,30 L 45,28 L 48,30 L 48,38 L 45,40 L 40,42 L 35,40 L 30,42 L 25,40 L 22,35 L 25,30 L 30,30 Z"
                fill="#c7cedb"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 25,42 L 30,42 L 35,45 L 40,48 L 45,50 L 45,52 L 40,55 L 35,58 L 30,60 L 25,58 L 22,55 L 20,50 L 20,45 L 25,42 Z"
                fill="#ffdfba"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 60,55 L 65,53 L 70,55 L 75,58 L 78,62 L 80,68 L 78,72 L 75,75 L 70,78 L 65,80 L 60,78 L 56,75 L 54,70 L 55,65 L 58,60 L 60,55 Z"
                fill="#baffc9"
                stroke="#1e293b"
                strokeWidth="0.3"
                strokeLinejoin="round"
                filter="url(#shadow)"
              />
              
              <path
                d="M 35,25 Q 38,27 41,26 Q 44,28 47,27"
                stroke="#87ceeb"
                strokeWidth="0.4"
                fill="none"
              />
              
              <path
                d="M 48,35 Q 50,40 52,45 Q 54,50 56,55"
                stroke="#87ceeb"
                strokeWidth="0.5"
                fill="none"
              />
              
              <path
                d="M 30,45 Q 35,46 40,46 Q 45,47 50,48"
                stroke="#87ceeb"
                strokeWidth="0.4"
                fill="none"
              />
              
              <text x="30" y="36" fontSize="2.8" fontFamily="Georgia, serif" fill="#1e293b" fontWeight="600">Новгород</text>
              <text x="49" y="27" fontSize="2.2" fontFamily="Georgia, serif" fill="#334155" fontStyle="italic">Ладога</text>
              <text x="49" y="47" fontSize="2.8" fontFamily="Georgia, serif" fill="#1e293b" fontWeight="600">Ростов</text>
              <text x="47" y="59" fontSize="2.2" fontFamily="Georgia, serif" fill="#334155" fontStyle="italic">Муром</text>
              <text x="61" y="44" fontSize="2.2" fontFamily="Georgia, serif" fill="#334155" fontStyle="italic">Полоцк</text>
              <text x="47" y="72" fontSize="2.8" fontFamily="Georgia, serif" fill="#1e293b" fontWeight="600">Киев</text>
              <text x="67" y="72" fontSize="2.2" fontFamily="Georgia, serif" fill="#334155" fontStyle="italic">Чернигов</text>
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