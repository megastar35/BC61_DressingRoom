export default function getData() {
  return axios({
    url: "./../data/Data.json",
    method: "GET",
  });
  // .then((result) => {
  //   //   console.log("result", result);
  //   return result;
  // })
  // .catch((err) => {
  //   console.log(err);
  //   return err;
  // });
}
// const data = [];
// getData.then((result) => {
//   data = result.data;
// });
