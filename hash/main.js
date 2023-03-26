// 区块链中的哈希函数：Secure Hash Algorithm/SHA，比特币用的是SHA256
// Proof Of Work/POW/工作量证明机制


const sha256 = require('crypro-js/sha256')

// 对于不同的输入，哪怕只是一个很微小的改动，输出的结果都是很不一样的；对于同一个输入，输出结果是一样的。
console.log(sha256('loganjin1').toString());
console.log(sha256('loganjin2').toString());


// 我现在需要得到一个开头值为0的哈希值，请告诉我x为多少？
// 这种情况只能通过改变字符串枚举来得到。
function proofOfWork() {
    let data = 'loganjin';
    let x = 1;
    while(true) {
        if(sha256(data + x).toString()[0] !== '0') {
            x += 1;
        }else {
            console.log(sha256(data + x).toString());
            console.log(x);
            break;
        }
    }
}
proofOfWork();

// 我现在需要得到一个开头值前4位全为0的哈希值，请告诉我x为多少？
function proofOfWork() {
    let data = 'loganjin';
    let x = 1;
    while(true) {
        if(sha256(data + x).toString().substring(0, 4) !== '0000') {
            x += 1;
        }else {
            console.log(sha256(data + x).toString());
            console.log(x);
            break;
        }
    }
}
proofOfWork();
