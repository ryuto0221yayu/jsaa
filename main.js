
{
  const scores = [80, 90, 40, 70];
  console.log(scores[0]);
  console.log(scores[1]);
  console.log(scores[2]);
  console.log(scores[3]);
  // const [A,B,C,D] = scores;
  // console.log(A);
  // console.log(B);
  // console.log(C);
  // console.log(D);
  scores.forEach((score) => {
    console.log(score);
  });
};

{
  const prices = [180, 190, 200];
  const updatedPrices = prices.map((price) => {
    price = price + 20;
    return price;
  });
  console.log(updatedPrices);
}

{
  const prices = [180, 190, 200];
  const updatedPrices = prices.map(price => price + 20
  );
  console.log(updatedPrices);
}

// {
//   const scores = [80, 90, 40, 70];
//   scores.forEach((score, index) => {
//     console.log(`個人の合計値 ${index}:${score}`);
//   });
// }

{
  const numbers = [1, 4, 7, 8, 10];
  
  // const evenNumber = numbers.filter((number) => {
  //   if (number % 2 == 0){

  //   }
    
  // });
  // console.log(evenNumber);
  const evenNumber = numbers.filter((number) => number % 2 == 0
  );
  console.log(evenNumber);
}

{
  const str = ('Heoll');
  console.log(str.length);
}

{
  const str = ('Hello');
  console.log(str.substring(2, 4));
}

{
  const str = ('Hello');
  console.log(str[1]);
}

{
  const t = [2023, 7, 29];
  console.log(t.join('/'));
}

{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach(function (score) {
    sum += score;
  });
  console.log(sum);
}

{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach(function (score) {
    sum += score;
  });
  let avg = sum / scores.length;
  console.log(avg);
  console.log(Math.floor(avg));
  console.log(Math.ceil(avg));
  console.log(Math.round(avg));
  console.log(avg.toFixed(3));
}


// {
//   const scores = [10, 3, 9];
//   let sum = 0;
//   scores.forEach(function(score){
//    sum += score;
//   });
//   let avg = sum / scores.length;
//   console.log(Math.floor(avg));
// }


// {
//   const scores = [10, 3, 9];
//   let sum = 0;
//   scores.forEach(function(score){
//    sum += score;
//   });
//   let avg = sum / scores.length;
//   console.log(Math.round(avg));
// }


// {
//   const scores = [10, 3, 9];
//   let sum = 0;
//   scores.forEach(function(score){
//    sum += score;
//   });
//   let avg = sum / scores.length;
//   console.log(Math.round(avg * 1000) / 1000);
// }

{
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}