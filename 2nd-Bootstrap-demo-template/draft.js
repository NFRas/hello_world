let promise = fetch(url, [options])

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error ("Whoops!")), 1000);
});

promise.then(
    result => alert(result),
    error => alert (error)
);