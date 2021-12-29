
import { cardList, listfailure, listrequest, listsucces } from "../Redux/action";


export const addList = (name,price,count) => (dispatch) => {
    console.log(name,price,count,"dcskj")
    const requestAction = listrequest();
    dispatch(requestAction);
    return fetch("https://pratice-heroku-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        price : price,
        count :count
    })
})
.then((res) => res.json())
.then((res) => {
    
    dispatch(listsucces(res));
})
.catch((res) => {
    dispatch(listfailure(res));
});
};

export const getData = () => (dispatch) => {
    console.log("dfsdfjsk")
    dispatch(listrequest());
    return fetch("https://pratice-heroku-server.herokuapp.com/posts")
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
          //success
          dispatch(cardList(res));
          return res
      })
      .catch((err) => {
        dispatch(listfailure());
      });
  };