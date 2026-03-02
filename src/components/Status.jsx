function Status ({status}) {
  let message;
  if (status === "lodading") {
    message = <p>Loading...</p>;
  } else if (status === "success") {
    message = <p>success</p>;
  } else {
    message = <p>Something went wrong.</p>;
  }
  return <div>{message}</div>
}
export default Status;