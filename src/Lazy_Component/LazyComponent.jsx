import React, {lazy, Suspense} from "react";

const MyComponent = lazy(() => import("./MyComponent"));


const LazyComponent = () => {
    return (
        <Suspense fallback={"loading..."}>
            <MyComponent/>
        </Suspense>
    )
};

export default LazyComponent;