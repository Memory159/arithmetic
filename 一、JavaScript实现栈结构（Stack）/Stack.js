// 封装栈类
function Stack() {
    // 栈中的属性
    this.items = []

    // 栈的相关操作
    // 方式一（不推荐）：给对象添加方法，其他对象不能复用
    // 方式二（推荐）：将方法作为对象的属性添加到原型对象中，给 Stack 类添加方法，能够多对象复用 
    // 1、push()将元素压入栈
    Stack.prototype.push = function(element) {
        // 利用数组 item 的 push 方法实现 Stack 类中的 push 方法
        this.items.push(element)
    }

    // 2、pop()弹出栈顶元素
    Stack.prototype.pop = function() {
        // 利用数组 item 的 pop 方法实现 Stack 类中的 pop 方法
        return this.items.pop()
    }

    // 3、peek()查看栈顶元素
    Stack.prototype.peek = function() {
        return this.items[this.items.length - 1]
    }

    // 4、isEmpty()判断栈是否为空
    Stack.prototype.isEmpty = function() {
        return this.items.length == 0
    }

    // 5、size()获取栈中元素个数
    Stack.prototype.size = function() {
        return this.items.length
    }

    // 6、toString()将栈中的元素以字符串形式返回
    Stack.prototype.toString = function() {
        var str = ''
        for (let i of this.items) {
            str += i + ' '
        }
        return str
    }
}

// 测试代码
// 栈的使用
var stack = new Stack()

stack.push(20)
stack.push(10)
stack.push(100)
stack.push(77)

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.toString());

// 简单应用
// 封装函数：将十进制转成二进制（十进制转二进制的运算最后倒序取余的特点符合栈的'先进后出'）
let tenToTwo = function(number) {
    // 1.定义一个栈对象，保存余数
    var stack = new Stack()
        // 循环操作
    while (number > 0) {
        // 2.1 获取余数并放入栈中
        stack.push(number % 2)
            // 2.2 获取整除结果作为下一次运算的数字（floor:向下取整）
        number = Math.floor(number / 2)
    }
    // 3.从栈中取出 0 和 1
    let finallNumber = ''

    while (stack.items.length != 0) {
        finallNumber += stack.pop()
    }
    return finallNumber
}

console.log(tenToTwo(10));
console.log(tenToTwo(100));
console.log(tenToTwo(1000));