/** Ý tưởng: 
 * Lấy kết quả đầu vào do người dùng nhập so sánh với mảng các kết quả có sẵn trong danh bạ
 * Nếu trùng thì lấy kết quả đó cùng với tên có trong danh bạ in ra màn hình
 * Nếu kết quả tồn tại nhiều hơn 1 thì sort theo tên có trong danh bạ để in các kết quả ra theo thứ tự bảng chữ cái
 */

function findNumber(arrA, arrB, key ) {
    let result = ""; 
    for (let i = 0; i < arrB.length; i++) {
        const element = arrB[i];
        if(element.indexOf(key) > 0){
            if(result == null) {
                result = arrA[i];
            } else {
                if(arrA[i].localeCompare(result) > 0)
                result = arrA[i];
            }
        }
    }
    return result == null ? "NO CONTACT" : result;
}
A = ["pim", "pom"]
B = ["9999912388888", "7778999"]
C = "123"

findNumber(A,B,C)