import { useDispatch, useSelector } from "react-redux"
import { fetchRandomWord } from "../reduxFile/generateWord-slice/generateWord"
import { ThreeCircles } from 'react-loader-spinner';

const GenerateWord = () => {
  const { word, loading, error } = useSelector((state) => state.randomWord)
  const dispatch = useDispatch();

  return (
    <section className="generateWord d-inline-flex flex-column gap-2 m-2 p-3 rounded">
      <h1>Generate Random Word</h1>
      {!error && (<h2 className="d-flex justify-content-center align-items-center">{loading ? <ThreeCircles color="black" width="2rem" height="2.2rem" /> : word}</h2>)}
      {error && (<h2 className="color-dangerous">{error}</h2>)}
      <button disabled={loading ? true : false} onClick={() => dispatch(fetchRandomWord())}>
        Generate
      </button>
    </section>
  )
}

export default GenerateWord