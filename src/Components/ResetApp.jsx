import React from "react";
import { resetReduxopedia } from "../redux/action/actions";
import { useDispatch } from "react-redux";
function ResetApp() {
  const dispatch = useDispatch();
  function resetApp() {
    dispatch(resetReduxopedia());
  }
  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={() => resetApp()}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
