// Arreglo que contiene las canciones
var listado_palabras = ["505", "ALL MY OWN STUNTS", "AMERICAN SPORTS", "ARABELLA", "THE BAD THING", "BALACLAVA", "BATPHONE", "BODY PAINT", "BIG IDEAS", "BLACK TREACLE", "BRIANSTORM", "BRICK BY BRICK", "THE CAR", "A CERTAIN ROMANCE", "CORNERSTONE", "CRYING LIGHTNING", "D IS FOR DANGEROUS", "DANCE LITTLE LIAR", "DANCING SHOES", "DANGEROUS ANIMALS", "DO I WANNA KNOW?", "DO ME A FAVOUR", "DON'T SIT DOWN 'CAUSE I'VE MOVED YOUR CHAIR", "FIRE AND THE THUD", "FIRESIDE", "FLUORESCENT ADOLESCENT", "FOUR OUT OF FIVE", "GOLDEN TRUNKS", "THE HELLCAT SPANGLED SHALALALA", "I AIN'T QUITE WHERE I THINK I AM", "I BET YOU LOOK GOOD ON THE DANCEFLOOR", "I WANNA BE YOURS", "I WANT IT ALL", "IF YOU WERE THERE, BEWARE", "THE JEWELLER'S HANDS", "KNEE SOCKS", "LIBRARY PICTURES", "LOVE IS A LASERQUEST", "MAD SOUNDS", "MARDY BUM", "MY PROPELLER", "NO. 1 PARTY ANTHEM", "OLD YELLOW BRICKS", "ONE FOR THE ROAD", "ONE POINT PERSPECTIVE", "ONLY ONES WHO KNOW", "PERHAPS VAMPIRES IS A BIT STRONG BUT..", "PILEDRIVER WALTZ", "POTION APPROACHING", "PRETTY VISITORS", "RECKLESS SERENADE", "RED LIGHT INDICATES DOORS ARE SECURED", "RIOT VAN", "SCIENCE FICTION", "SECRET DOOR", "SHE LOOKS LIKE FUN", "SHE'S THUNDERSTORMS", "SNAP OUT OF IT", "STAR TREATMENT", "STILL TAKE YOU HOME", "SUCK IT AND SEE", "TEDDY PICKER", "THAT'S WHERE YOU'RE WRONG", "THIS HOUSE IS A CIRCUS", "TRANQUILITY BASE HOTEL & CASINO", "THE ULTRACHEESE", "THE VIEW FROM THE AFTERNOON", "WHEN THE SUN GOES DOWN", "WHY'D YOU ONLY CALL ME WHEN YOU'RE HIGH?", "THE WORLD'S FIRST EVER MONSTER TRUCK FRONT FLIP", "YOU PROBABLY COULDN'T SEE FOR THE LIGHTS BUT YOU WERE STARING STRAIGHT AT ME", "THERE'D BETTER BE A MIRRORBALL", "SCULPTURES OF ANYTHING GOES", "JET SKIS ON THE MOAT", "HELLO YOU", "MR. SCHWARTZ", "PERFECT SENSE"];
var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
    //sólo la pantalla de juego se queda visible 
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //posicionamos el cursor en el input
    document.getElementById("palabra_ingresada").focus();

    //cargamos la palabra
    cargarPalabra();

    //tiempo - cada 1 seg llamamos a la funcion RestarTime
    timer = setInterval('restarTiempo()', 1000);
}
// funcion que carga  la siguiente palabra  del arreglo de forma  aleatoria
function cargarPalabra(){
    //generamos la posicion de forma aleatoria
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];    
    //eliminamos la posicion ya mostrada
    listado_palabras.splice(indice,1);
}

// función que compara la palabra ingresada con la palabra mostrada
function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
    //convertimos toda palabra tecleada a mayúscula
    palabra_tecleada = palabra_tecleada.toUpperCase();

    if(palabra_mostrada==palabra_tecleada){
        acertadas++;
        document.getElementById("palabra_ingresada").value="";
        agregarNodo(palabra_tecleada);
        cargarPalabra(); //cargamos otra palabra;
    }
}

function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}   

//Función que muestra el tiempo
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        //detengo el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}