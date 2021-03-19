/* Ikinci haftaki ödev: node.js tarafından sağlanan bir kütüphaneyi
   kullanarak bir dosya okumaktir. 
   Ödevde örnek bir dosyanin okunup içeriğinin ekrana yazdirilmasi gerekmektedir. 
 */

   //kutuphaneyi cagirdik
const file = require('fs');
// ilgili parametreleri gonderdik
file.readFile('OrnekDosya.txt', 'utf-8', function (err, data) {

  if (err) throw err;
// ekrana yazdirdik.
  console.log(data);

});