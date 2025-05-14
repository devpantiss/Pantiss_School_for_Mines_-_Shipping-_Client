import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const ImpactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-purple-900 text-white py-16 px-8" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Header Section */}
        <div className="lg:col-span-1 flex items-center">
          <h2 className="text-4xl font-semibold leading-snug">
            Making markets.<br />
            <span className="text-orange-400">Lifting Livelihoods.</span>
          </h2>
        </div>

        {/* Metrics Section */}
        <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-2 gap-8">
          {[
            { value: 1000, label: 'Livelihoods' },
            { value: 500, label: 'Skilled and Assessed' },
            { value: 12, label: 'Years of Redefining Markets', suffix: '+' },
            { value: 5000, label: 'Training Sites', suffix: '+' },
            { value: 150, label: 'Livelihood Centres', suffix: '+' },
            { value: 100, label: 'Happy Customers', suffix: '+' },
            { value: 50, label: 'College B.Voc Programs', suffix: '+' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-orange-400">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </h3>
              <p className="text-lg mt-3 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
