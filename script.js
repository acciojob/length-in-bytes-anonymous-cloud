const byteSize = (str) => {
  // write your code here
	 return new Blob([str]).size;
};
console.log(('hello world')); 
console.log(('안녕하세요'));     
console.log((''));            


// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
