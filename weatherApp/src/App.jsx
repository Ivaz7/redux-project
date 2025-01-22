import { useGetWeatherQuery } from "./service/API/weatherAPI"

function App() {
  const { data, error, isLoading } = useGetWeatherQuery({ lat: -6.175110, lon: 106.865036 });

  console.log(data);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div>{/* Tampilkan data cuaca di sini */}</div>}
    </div>
  )
}

export default App;
