const cipher = {

    encode: (offset,string) => {
      let txtCifraDescifra = "";
      if (typeof string !== "string") {
        throw new TypeError('Debes ingresar solo texto');
      }
      for (let i = 0; i < string.length; i++) {
        let txtAscii = string.charCodeAt(i);
        if (txtAscii >= 65 && txtAscii <= 90){
          txtCifraDescifra += String.fromCharCode(((txtAscii - 65 + parseInt(offset)) %26) + 65);
        }
        else {
          txtCifraDescifra += string.charAt(i);
        }
       }
        /*return (document.getElementById("mensajeDescifrado").value = txtCifraDescifra);*/
        return txtCifraDescifra;
      },

      decode: (offset,string) => {
        let txtCifraDescifra = "";
        if (typeof string !== "string") {
          throw new TypeError('Debes ingresar solo texto');
        }        
      /*  key = (26 - offset) %26;
        txtCifraDescifra = encode(offset,string);*/
          for (let i = 0; i < string.length; i++) {
          let txtAscii = string.charCodeAt(i);
          if (txtAscii >= 65 && txtAscii <= 90){
            txtCifraDescifra += String.fromCharCode(((txtAscii + 65 - parseInt(offset)) %26) + 65);
          }
          else {
            txtCifraDescifra += string.charAt(i);
          }
        }
        /*  return (document.getElementById("mensajeDescifrado").value = txtCifraDescifra);*/
          return txtCifraDescifra;
        }

 };

export default cipher;
