// let p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("i am a promise and i am fullfilled")
//     },5000)
// })

//=====================================================================================================

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i am promise and i am resolved")
//         resolve(80)
//     },5000)
// })
// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i am promise and i am rejected")
//         reject(new Error("i am an error"))
//     },5000)
// })
// console.log(p1,p2)

//======================================================
// let p1 = new Promise((resolve, reject) => {
//         console.log("promise is pending")
//         setTimeout(()=>{
//             console.log("i am promise and i am resolved")
//             resolve(80)
//         },5000)
//     })
//     let p2 = new Promise((resolve, reject) => {
//         console.log("promise is pending")
//         setTimeout(()=>{
//             console.log("i am promise and i am rejected")
//             reject(new Error("i am an error"))
//         },5000)
//     });

//     p3.then((value) => {
//         console.log(value);
//     })

//   p4.catch((erroe) => {
//     console.log("some error occured in p4")
//   })
//======================================================


    //promises chain

    // let a = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //         console.log("resolve after 3 secs")
    //         resolve(100)
    //     },3000)
    // })
    // a.then((value)=>{
    //     console.log(value)
    //     let b = new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve("promise 2")
    //         },3000)
    //     })
    //     return b
    // }).then((value)=>{
    //     console.log("we are done")
    //     return 2
    // }).then(()=>{
    //     console.log("done")
    // })
// //=============================================================================================================================
// const loadScript = (src)=>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.type = " text/javascript"
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = (script)=>{
//             resolve("script has been loaded")
//         }
//         script.onerror = ()=>{reject(0)}
//     })
// }
// let x = loadScript("https://cd.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// x.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry but we are having problem loadong the script")
// })

//==========================================================================================================================

      //PROMISE API = APPICATION PROGRAM INTERFACE

      // let a1 = new Promise((resolve, reject) => {
      //   setTimeout(()=>{
      //       resolve("value 1");
      //   },1000)
      // })
      // let a2 = new Promise((resolve, reject) => {
      //   setTimeout(()=>{
      //       resolve("value 2");
      //   },2000)
      // })
      // let a3 = new Promise((resolve, reject) => {
      //   setTimeout(()=>{
      //       resolve("value 3");
      //   },10000)
      //  })
      // a1.then((value)=>{
      //   console.log(value)
      // })
      // a2.then((value)=>{
      //   console.log(value)
      // })
      // a3.then((value)=>{
      //   console.log(value)
      // })

      //API METHODS
   //1.PROMISE ALL

  //  let promise_all = Promise.all([a1,a2,a3])
  //  promise_all.then((value)=>{
  //   console.log(value)
  //  })

  //Promise allsettled
  
  //it gives output with value and status of promises
  
  // let a4 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       resolve("value 1");
  //   },1000)
  // })
  // let a5 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       //resolve("value 2");
  //       reject(new Error("Error"));
  //   },2000)
  // })
  // let a6 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       resolve("value 3");
  //   },10000)
  //  })
  //  let promise_all = Promise.allSettled([a4,a5,a6])
  //  promise_all.then((value)=>{
  //   console.log(value)
  //  })

  //PROMISE RACE

  //it gives an output which resolves first including error

  // let a4 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       resolve("value 1");
  //   },10000)
  // })
  // let a5 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       //resolve("value 2");
  //       reject(new Error("Error"));
  //   },20000)
  // })
  // let a6 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //       resolve("value 3");
  //   },2000)
  //  })
  //  let promise_all = Promise.race([a4,a5,a6])
  //  promise_all.then((value)=>{
  //   console.log(value)
  //  })

  //Promise.any

  //it gives an output which isresolved first and ignores errors
  
  let a4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 1");
    },2000)
  })
  let a5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve("value 2");
        reject(new Error("Error"));
    },1000)
  })
  let a6 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 3");
    },3000)
   })
   let promise_all = Promise.any([a4,a5,a6])
   promise_all.then((value)=>{
    console.log(value)
   })