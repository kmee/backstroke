export function generateLink() {
  return {
    "_id": "57c20d14202d40988411078d",
    "enabled": true,
    "owner": "57c1784179111d7374647b8f",
    "to": {
      "type": "fork-all",
      "provider": "github"
    },
    "from": {
      "type": "repo",
      "name": "1egoman/lunch-app",
      "provider": "github",
      "private": false,
      "fork": false,
      "branch": "master",
      "branches": [
        "master",
        "react"
      ],
    },
    "__v": 0,
    "paid": false,
    "name": "backstroke sync"
  }
}


export let res = function answer(cb) {
  res.statusCode = 200
  res.data = null;
  res._callback = cb;
};

res.send = function(data) {
  if (res.data) {
    res.data += data;
  } else {
    res.data = data;
  }
  res._callback.apply(res, [res]);
  return res;
}

res.status = function(code) {
  res.statusCode = code;
  return res;
}

res._clear = function() {
  res();
}
