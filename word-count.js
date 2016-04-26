String.prototype.countWords = function(){
  return this.split(/\s+/).length;
}

'olly olly in come free'.countWords(); 
