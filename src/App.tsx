import useAxios from './hooks/useAxios';
import { LoadingComponent } from './components/Loading/LoadingComponent';
import { FooterComponent } from './components/Footer/FooterComponent';

type ResponseWordOfTheDay = {
  "_id": string,
  "word": string,
  "meanings": string[],
  "createdAt": Date,
  "deletedAt": Date | null,
  "wordOfTheDayAt": Date
}

function App() {
  const { data, loading, error } = useAxios<ResponseWordOfTheDay>('https://daily-word.ddns.net/today');

  if (loading) return <LoadingComponent />;
  if (error) return <p>I'm sorry. We are going through problems. Please try again in a few minutes: {error}</p>;

  if (data) {
    return (
      <div className='flex flex-col h-full justify-between gap-8'>
        <div className='bg-primary text-white py-7'>
          <div className='container mx-auto'>
            <h3 className='text-5xl sm:text-7xl text-center font-semibold capitalize'>{data.word}</h3>
            <h1 className='text-center text-base text-secondary'>Daily Word</h1>
          </div>
        </div>
        <div className='flex justify-center container mx-auto sm:px-0 px-4 w-full md:w-[650px] lg:w-[750px] xl:w-[800px]'>
          <div className='shadow-primary shadow-md border-solid border-primary border-[1px] rounded-lg'>
            <h4 className='text-3xl text-white bg-primary p-7 rounded-t-lg'>Meanings</h4>
            <ul className='p-7'>
              {data.meanings.map((meaning) => (
                <li className='text-dark text-lg mb-4 last:mb-0' key={meaning}>
                  <span className='material-icons-outlined mr-1 align-sub text-primary'>turned_in</span>{meaning}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
}

export default App
