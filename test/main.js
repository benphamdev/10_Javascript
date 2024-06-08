var courses = [
    {
        name: 'C++',
        coin: 200,
        isFinish: true
    },
    {
        name: 'python',
        coin: 400,
        isFinish: false
    },
    {
        name: 'javascript',
        coin: 100,
        isFinish: false
    },
    {
        name: 'java',
        coin: 500,
        isFinish: false
    },
    {
        name: 'C#',
        coin: 250,
        isFinish: false
    }
]


Array.prototype.myFilter = function (callBack) {
    var ans = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var temp = callBack(this[index], index, this);
            if (temp)
                ans.push(this[index]);
        }
    }
    return ans;
}
var res = courses.myFilter((course, index, arr) => {
    return course.coin > 100;
});
console.log(res);