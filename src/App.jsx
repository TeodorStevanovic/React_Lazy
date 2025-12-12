import React, { Suspense } from "react";
import { ClipLoader} from "react-spinners";
import MyPage from "./MyPage";

function App() {
  return (
    <Suspense fallback={<ClipLoader color={"lightblue"} size={150} />}>
      <MyPage />
    </Suspense>
  );
}

export default App;
