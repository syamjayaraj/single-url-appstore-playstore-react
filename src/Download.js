import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function App() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.tetraz.capsigo";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com/app/capsigo/id1547746310";
    } else{
      window.location.href =
        "https://capsigo.com";
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
