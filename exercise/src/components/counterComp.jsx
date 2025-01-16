import { useSelector, useDispatch } from "react-redux";
import { increamnet, decreament, increamnetByAmount, decreamentByAmount } from "../reduxFile/counter-slice/counterSlice";
import { changeAmount } from "../reduxFile/counter-slice/amountSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const amount = Number(useSelector((state) => state.amount.amount))
  const dispatch = useDispatch();

  return (
    <section className="counter d-inline-flex flex-column align-items-center m-2 p-3 rounded">
      <h1>Counter App</h1>
      <h2>
        {count}
      </h2>
      <div className="d-flex flex-row gap-2 mb-2">
        <button onClick={() => dispatch(increamnet())}>Increament</button>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
      </div>
      <div className="d-flex flex-row gap-2">
        <button onClick={() => dispatch(increamnetByAmount(amount))}>increamnet By {amount}</button>
        <button onClick={() => dispatch(decreamentByAmount(amount))}>decreament By {amount}</button>
        <input className="rounded border-0 p-1" type="number" name="inputNum" id="inputNum" value={amount} onChange={(e) => dispatch(changeAmount(e.target.value))} />
      </div>
    </section>
  )
}

export default Counter;