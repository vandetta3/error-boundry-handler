export const getUser = (id: number) => {
  let res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json()
  );
  return res;
};
