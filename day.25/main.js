var programmingLanguages = ['javascript', 'php', 'java'];
console.log(programmingLanguages[2]);
programmingLanguages.push('python');
programmingLanguages.pop();
programmingLanguages.unshift('delete');
programmingLanguages.shift();
console.log(programmingLanguages);
var programmingLanguages1 = ['javascript', 'php', 'java','python', 'delete'];
programmingLanguages1.splice(3,2,'Ruby');
console.log(programmingLanguages1);
console.log(Math.floor(Math.random()*10));

var students = ['stunedt 1', 'stunedt 2'];
var [s1,s2] = students;
console.log(s1);
console.log(s2);
var citys = ['city 1','city 2','city 3','city 4','city 5' ];
var [c1,c2,,c4,c5] = citys;
console.log(c1);
console.log(c2);
console.log(c4);
console.log(c5);

var numbers = [1,2,3,4,5,6,7,8,9,10];
var[first, second, ...othernumbers]=numbers;
console.log(first);
console.log(second);
console.log(first);
console.log(othernumbers.toString());