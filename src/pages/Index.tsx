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
          <div className="relative w-full aspect-[16/10] bg-white rounded-xl overflow-hidden border-2 border-black">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" width="5" height="5" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="5" stroke="#000000" strokeWidth="0.03" opacity="0.15" />
                  <line x1="0" y1="0" x2="5" y2="0" stroke="#000000" strokeWidth="0.03" opacity="0.15" />
                </pattern>
              </defs>
              
              <rect width="100" height="100" fill="#fefefe" />
              <rect width="100" height="100" fill="url(#gridPattern)" />
              
              <path
                d="M 48,18 L 50,20 L 52,19 L 55,21 L 55,35 L 53,38 L 48,38 L 48,18 Z"
                fill="#ffc0cb"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 48,38 L 53,38 L 55,40 L 55,52 L 52,55 L 48,55 L 45,52 L 45,40 L 48,38 Z"
                fill="#ffff99"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 55,35 L 58,35 L 62,33 L 65,35 L 68,33 L 70,35 L 72,38 L 70,42 L 68,45 L 65,48 L 62,50 L 58,52 L 55,52 L 55,40 L 55,35 Z"
                fill="#e6e6fa"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 30,30 L 35,28 L 40,30 L 45,28 L 48,30 L 48,38 L 45,40 L 40,42 L 35,40 L 30,42 L 25,40 L 22,35 L 25,30 L 30,30 Z"
                fill="#d3d3d3"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 25,42 L 30,42 L 35,45 L 40,48 L 45,50 L 45,52 L 40,55 L 35,58 L 30,60 L 25,58 L 22,55 L 20,50 L 20,45 L 25,42 Z"
                fill="#ffe4b5"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
              />
              
              <path
                d="M 60,55 L 65,53 L 70,55 L 75,58 L 78,62 L 80,68 L 78,72 L 75,75 L 70,78 L 65,80 L 60,78 L 56,75 L 54,70 L 55,65 L 58,60 L 60,55 Z"
                fill="#f0e68c"
                stroke="#000000"
                strokeWidth="0.25"
                strokeLinejoin="round"
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
              
              <text x="32" y="35" fontSize="2.5" fontFamily="serif" fill="#000000" opacity="0.8">Новгород</text>
              <text x="50" y="28" fontSize="2" fontFamily="serif" fill="#000000" opacity="0.8" fontStyle="italic">Ладога</text>
              <text x="50" y="46" fontSize="2.5" fontFamily="serif" fill="#000000" opacity="0.8">Ростов</text>
              <text x="48" y="58" fontSize="2" fontFamily="serif" fill="#000000" opacity="0.8" fontStyle="italic">Муром</text>
              <text x="62" y="45" fontSize="2" fontFamily="serif" fill="#000000" opacity="0.8" fontStyle="italic">Полоцк</text>
              <text x="48" y="70" fontSize="2.5" fontFamily="serif" fill="#000000" opacity="0.8">Киев</text>
              <text x="68" y="70" fontSize="2" fontFamily="serif" fill="#000000" opacity="0.8" fontStyle="italic">Чернигов</text>
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
                      className="w-1.5 h-1.5 rounded-full bg-black transition-all duration-300 group-hover:scale-150"
                    />
                  </div>
                  
                  <div className="mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className="text-[8px] font-bold px-1 py-0.5 whitespace-nowrap bg-white/90 border border-black rounded"
                      style={{
                        color: '#000000',
                        fontFamily: 'serif'
                      }}
                    >
                      {event.city}
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