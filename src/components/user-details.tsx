import { usePeriodStore } from '../store/period.store';
import type { Period } from '../types/data';

export const UserDetails = () => {
  const periodStore = usePeriodStore();

  const handleClick = (newPeriod: Period) => {
    periodStore.setPeriod(newPeriod);
  };

  const periods: Period[] = ['daily', 'weekly', 'monthly'];

  return (
    <div className='bg-Navy-900 rounded-[15px]'>
      <div className='bg-Purple-600 rounded-[15px] flex items-center p-8 gap-4 xl:flex-col xl:items-start xl:h-[354px] xl:w-[255px] xl:gap-10'>
        <img
          className='size-16 border-2 border-white rounded-full'
          src='/images/image-jeremy.png'
          alt=''
        />
        <div>
          <p className='text-Navy-200'>Report for</p>
          <h1 className='font-extralight text-[1.375rem] xl:text-[2.5rem]'>
            Jeremy Robson
          </h1>
        </div>
      </div>

      <ul className='flex justify-around py-6 text-lg xl:flex-col xl:p-6 xl:gap-2'>
        {periods.map((period) => {
          const name = period.charAt(0).toUpperCase() + period.slice(1);
          const isActive = period === periodStore.period;

          return (
            <li>
              <button onClick={() => handleClick(period)}
              className={`${
                isActive ? 'text-white' : 'text-Navy-200'
              } hover:text-white cursor-pointer`}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
