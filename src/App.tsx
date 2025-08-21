import { UserDetails, StatsContainer } from './components';

function App() {
  
  return (
    <main className='w-[327px] my-10 flex flex-col gap-6 md:w-[612px] xl:flex-row xl:w-[1116px] xl:mt-20'>
      <UserDetails />
      <StatsContainer />
    </main>
  )
}

export default App
