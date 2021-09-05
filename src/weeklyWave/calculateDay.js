export function appendZero(start, end) {
    let sMin =
      Math.floor(Math.log10(start.getMinutes()) + 1) === 1
        ? `0${end.getMinutes()}`
        : start.getMinutes();
    let eMin =
      Math.floor(Math.log10(end.getMinutes()) + 1) === 1 ? `0${end.getMinutes()}` : end.getMinutes();
  
    return [sMin, eMin];
  }
  
  export function getMonthLastIndex(date) {
    let n;
    switch (date.getMonth()) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        n = 31;
        break;
      case 1:
        if (date.getFullYear() % 400 === 0) {
          n = 29;
        } else if (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) {
          n = 29;
        } else {
          n = 28;
        }
        break;
      default:
        n = 30;
    }
    return n;
  }
  export function updateWeek(todayClasses, counter) {
    var weekArr = [];
    let now = new Date();
    let d = now.getDate() + counter;
    let maxDate = getMonthLastIndex(now);
    for (let i = 0; i < 7; i++) {
      // console.log("i value is ", i);
      d = now.getDate() + counter + i;
      // console.log(d);
      // console.log(now.getDate(), counter, i);
      if (0 < d && d <= maxDate) {
        weekArr.push(new Date(`${now.getMonth() + 1} ${d} ${now.getFullYear()}`));
      } else if (d <= 0) {
        let month = now.getMonth();
        let prevMon, prevYear;  
        if (month === 0) {
          prevMon = 11;
          prevYear = now.getFullYear() - 1;
          let date = new Date(`${prevMon + 1} ${1} ${prevYear}`);
          let newDate = getMonthLastIndex(date) + counter + i + 1;
          weekArr.push(new Date(`${prevMon + 1} ${newDate} ${prevYear}`));
        } else {
          prevMon = now.getMonth() - 1;
          prevYear = now.getFullYear();
          let date = new Date(`${prevMon + 1} ${1} ${prevYear}`);
          let newDate = getMonthLastIndex(date) + counter + i + 1;
          weekArr.push(new Date(`${prevMon + 1} ${newDate} ${prevYear}`));
        }
      } else { 
        let month = now.getMonth();
        let nextMon, nextYear;
         if (month === 11) {
          nextMon = 0;
          nextYear =   now.getFullYear() + 1;
          let date = new Date(`${nextMon + 1} ${1} ${nextYear}`);
          console.log(date);
          let newDate = getMonthLastIndex(date) + counter + i + 1;
          weekArr.push(new Date(`${nextMon + 1} ${newDate} ${nextYear}`));
        } else {
          nextMon = now.getMonth() + 1;
          nextYear = now.getFullYear();
          let date = new Date(`${nextMon + 1} ${1} ${nextYear}`);
          console.log(date);
          let n = getMonthLastIndex(date);
          let newDate = n + counter + i + 1;
            newDate = newDate !== n ? newDate % n : newDate;
          console.log(newDate);
          weekArr.push(new Date(`${nextMon + 1} ${newDate} ${nextYear}`));
        }
      }
    }
    // console.log(weekArr);
    // let filterdData = [];
    // for (let i = 0; i < 7; i++) {
    //   let res = [];
    //   let d = weekArr[i].getDate();
    //   // console.log(d);
    //   res = todayClasses.filter((meeting) => {
    //     let start = new Date(meeting.class_start_time);
    //     if (start.getDate() === d) {
    //       return meeting;
    //     } else {
    //       return false;
    //     } 
    //   });
    //   filterdData.push(res);
    // }
    // console.log(filterdData);
    return weekArr ;
  }
  