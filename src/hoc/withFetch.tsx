import React from "react";
import useFetch from "../hooks/useFetch";

function withFetch<T>(
  Component: React.ComponentType<T>,
  url: string,
  obj?: any
) {
  function ComponentWithFecth<R>(props: T) {
    const { data, isLoading, error } = useFetch<R>(url, obj);

    switch (true) {
      case isLoading:
        return <h1>Loader</h1>;

      case !!error:
        return <h1>{error!.message}</h1>;

      default:
        return <Component data={data!} {...props} />;
    }
  }

  return ComponentWithFecth;
}

export default withFetch;
