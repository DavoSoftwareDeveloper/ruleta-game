import { nanoid, urlAlphabet } from 'nanoid'



export const listaFrases = [
  {
    tema:"Naturaleza y Zen",
    frases:["El agua es la fuerza motriz de toda la naturaleza",
      'La naturaleza no se apresura, sin embargo todo se lleva a cabo', 
      'Nunca podrás encontrar lo que nunca se ha perdido',
      'Cuando dejo ir lo que soy, me convierto en lo que podría ser',
      'Cuando el discípulo está preparado aparece el maestro',
      'Es fácil creer que somos olas y olvidar que también somos el océano',
      'Amarse a uno mismo es la base para amar a otra persona',
      'El dolor es inevitable, pero el sufrimiento es opcional',
      'El odio no disminuye con el odio. El odio disminuye con el amor',
      'En lo que pensamos, justamente en eso nos convertiremos',
      'A un loco se le conoce por sus actos, a un sabio también',
      'No temas demorarte, ten miedo a detenerte',
      'No te preocupes si no sabes algo, preocúpate si no quieres aprender',
      'Por mucho que sople el viento, la montaña no se inclinará ante él',
      'Nadie regresa de sus viajes siendo el mismo que era antes',
      'Si te olvidas de ti mismo te vuelves el universo',
      'No hay miedo para aquel cuya mente no está llena de deseos',
      'He vivido con muchos maestros Zen, muchos de ellos gatos',
      'La máxima victoria es la que se gana sobre uno mismo']
  },
  {
    tema:"Curiosidades",
    frases:[
        'Los delfines duermen con un ojo abierto',
        'El elefante es el único mamífero que no puede saltar',
        'En Jupiter y Saturno la lluvia esta hecha de diamantes',
        'El músculo más fuerte del cuerpo es la lengua',
        'Las motosierras eran un instrumento auxiliar que utilizaban los cirujanos',
        'Un oso panda puede estar doce horas comiendo',
        'Si un pez no bebe agua, puede morir deshidratado',
        'Las abejas pueden reconocer rostros humanos',
        'La miel es el único alimento que no se pudre',
        'El logotipo de Chupa Chups fue diseñado por Salvador Dalí',
        'Japón tiene más de dos-cientos sabores de Kit Kat',
        'Un terremoto de magnitud doce partiría la Tierra por la mitad',
        'El Murciélago es el único mamífero que puede volar',
        'Los pulpos tienen tres corazones',
        'El Everest es la montaña más alta del planeta',
        'el Chino es el idioma más hablado en el mundo' ,
        'El agua no es incolora, refleja una pequeña tonalidad azul']
    },
    {
      tema:"Refranes chistosos",
      frases:[
        'Tropezar y no caer, adelantar camino es', 
        'Hay dos palabras que te abrirán muchas puertas: tire y empuje' ,
        'No dejes para mañana lo que puedas hacer la semana que viene',
        'A caballo regalado... ¡gracias!', 
        'Bienaventurados los borrachos, que verán a Dios dos veces', 
        'Lo importante no es ganar, sino hacer perder al otro', 
        'Por más vueltas que das, el culo siempre te queda atrás' ,
        'Si el mundo te da la espalda, tócale el trasero', 
        'Al mal tiempo, usa tu paraguas' ,
        'Limpia tu moco y no harás poco' ,
        'Ojos que no ven, Facebook que te lo cuenta' ,
        'Más vale tarde porque por la mañana me duermo' ,
        'El que ríe el último es el que no ha entendido el chiste' ,
        'Cada día que amanece, el número de tontos crece' ,
        'Nunca renuncies a tus sueños... duerme cinco minutos más' ,
        'El que esté libre de pecado no sabe lo que se pierde' ,
        'La excepción de la regla dura nueve meses' ,
        'El eco siempre tiene la última palabra' ,
        'El que madruga encuentra todo cerrado' ,
        'El que sabe, sabe; y el que no, es jefe',
        'Hay un mundo mejor, pero es carísimo',
        'Abogado, juez y doctor, cuanto más lejos, mejor',
        'No por mucho madrugar pasa ante el autobús',
        'Nadie sabe lo que tiene hasta que ordena su cuarto',
        'No bebas mientras conduces, podrías derramar la bebida', 
        'No por mucho vigilar se descarga más temprano',
        'No renuncies a tu sueño, sigue durmiendo', 
        'Naces libre, luego pagas impuestos hasta morir', 
        'El eco siempre tiene la última palabra', 
        'Más vale prevenir que formatear', 
        'Nadie sabe lo que tiene hasta que ordena su cuarto']
      }
  
]

export function nuevaFraseNew(){
  const randomTema = Math.floor(Math.random()* listaFrases.length);
  let temaRandom = listaFrases[randomTema]
  const randomFrase = Math.floor(Math.random()* temaRandom.frases.length);
  let frase = temaRandom.frases[randomFrase]
  console.log(frase)
  return frase
}



export function calculoPanel(){

  const palabras = nuevaFraseNew().toUpperCase().split(" ").reverse()
  console.log(palabras)
  const hileras = [ [],[],[],[],[],[],[],[],[],[],[],[],[],[] ]
    // console.log(palabras)
    const ponerPalabras = () => {
      for (let i = palabras.length -1 ; i >= 0; i--){
        let letras = palabras[i].split("").reverse()
        for ( let j = 0; j < letras.length; j++){
          hileras[i].splice(0,0,letras[j])
          hileras[i].splice(j+1)
        }
      }
      return hileras
    } 
    ponerPalabras()
    console.log(hileras.reverse())
    let myArray = []; 
    const prepararState = () => {
      hileras.map((el, index) => {
        return el[0] && el.map(ele => {   
          
          let obj= {  descubierto:false,
            acierto:false,
            id:nanoid(),
            valor: ele  }
            myArray.push(obj);
            
          })})
          return myArray
          
        }
        prepararState()
        
        console.log(prepararState())
        let myArray2 = []
        const prepararState2 = ()=>{
          const referencia = palabras.reverse()
          return referencia.map((el)=>{
            let tamaño = el.length;
            let arr = myArray.slice(0,tamaño)
            myArray.splice(0,tamaño)
            return myArray2.push(arr)  
          })
        }
        prepararState2()
        console.log(myArray2)
    return myArray2
        
}


       
