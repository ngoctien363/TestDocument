
// các bước
// Khởi tạo một hàm nhận một giá trị đầu vào là một chuỗi số nguyên (number)
// Tạo một biến sum = 0;
// Khởi tạo một vòng lặp for để tìm ra index của các chữ số đầu vào
// Tạo một biến count = 0;
// Kiểm tra nếu sum chia hết cho 3 thì count tăng thêm 1 giá trị
// Tạo một vòng lặp có biến j nhỏ hơn độ dài của number
// Khai báo một biến result = sum - number[j]
// Tạo một vòng lặp từ 0-9 để kiểm tra với biến t.
//   + Nếu result cộng với biến t chia hết cho 3 và 
//     t không bằng number[t] thì tăng giá trị count lên 1
// In biến count ra màn hình

/* ý tưởng
Tính tổng các chữ số của một số đã cho, 
sau đó với mỗi chỉ số,
loại bỏ chữ số đó và thử tất cả các 
chữ số có thể từ 0 đến 9 và xem tổng 
có chia hết cho 3 hay không 
*/
function findCount(number) {
    let sum = 0; // biến tổng
    for (let i = 0; i < number.length; ++i) {
      sum += number[i] - 48;
    }
    let count = 0;
    if(sum % 3 === 0) count++;
    for( let j = 0; j < number.length; ++j){
      let reSum = sum - (number[j] - 48 );
      
      for(let t = 0; t < 9; ++t ){
        //Kiểm tra reSum có chia hết cho 3 không
        if((reSum + t)%3 == 0 && t != number[t] - 48){
          ++count;
        }
      }
    }
    document.write(count);
  }
  let number = '579';
  findCount(number);