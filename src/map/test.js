const m = new Map();
const o = { p: 'hello world' };

m.set(o, 'content');
//获取键值
console.log(m.get(o)); //content
console.log(m);//Map { { p: 'hello world' } => 'content' }
//删除
m.delete(o);

const m1 = new Map([
    ['name', 'xiao wang'],
    ['age', '24']
]);
console.log(m1.has('name'));
console.log(m1.get('name'));