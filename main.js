const Ray = () => {
  return {
    
    length : 0,




    
    push : function(str){
      this[this.length] = str;
      this.length++;
    },

    pop : function(){
      const toBeRemoved = this[this.length-1]
      delete this[this.length-1]
      this.length--;

      return toBeRemoved;
    },

    unshift : function(str){
      for (let i = this.length; i>0; i--) {
      this[i] = this[i-1]
      }
      this[0] = str;
      this.length++;
    },
  shift : function(){
    const str = this[0];
    for (let i = 0; i<this.length; i++) {
      this[i] = this[i+1]
      }
      delete this[this.length-1]
      this.length--;
      return str
    },
  }

  }


module.exports = {
  Ray,
}