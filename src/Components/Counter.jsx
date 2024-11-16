import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
} from "../redux/store";
function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);
  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white h4 pb-2">Counter : {count}</div>
      <div className="row container-fluid">
        <div className="col-md-6 col-12 p-4">
          <div className="border p-2">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <div className="row">
              <div className="col-6">
                <button
                  className="btn-primary btn form-control"
                  onClick={() => dispatch(increment())}
                >
                  Add
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn-danger btn form-control"
                  onClick={() => dispatch(decrement())}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 p-4">
          <div className="border p-2">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4">
                <input
                  className="form-control"
                  placeholder="multiplier..."
                  type="text"
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)}
                />
              </div>
              <div className="col-4">
                <button
                  className="btn-primary btn form-control"
                  onClick={() => dispatch(incrementMultiplier(multiplier))}
                >
                  Add
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn-danger btn form-control"
                  onClick={() => dispatch(decrementMultiplier(multiplier))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
