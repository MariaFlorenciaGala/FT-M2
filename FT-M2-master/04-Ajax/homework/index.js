const URL_BASE = "http://localhost:5000";
const image = $('#image')
const verAmigos =  $('#boton');
image.hide();

//ver amigos
verAmigos.click(() => {
    image.show()
    const lista = $('#lista');
    lista.empty();//este la vacía por si llega a estar ocupada
    const urlAmigos = `${URL_BASE}/amigos`;
    $.get(urlAmigos,(arrayAmigos)=> {
        for(const amigo of arrayAmigos){
            lista.append(`<li>${amigo.name}</li>`)
        }
    }
    )

})

//buscar amigos
const botonBuscar = $('#search')
const inputBuscar = $('#input')

botonBuscar.click(()=>{
    const input = inputBuscar.val()
    const amigo = $('#amigo')
    amigo.empty()
    if(input > 6 || input < 1)      return alert('Lo siento , no existe un amigo con ese id')
    const urlAmigoId = `${URL_BASE}/amigos/${input}`
    $.get(urlAmigoId, (objetoAmigo)=>{
        $('#amigo').text(objetoAmigo.name)
        
    })

})

//eliminar amigos

const botonBorrar = $('#delete')
const inputBorrar = $('#inputDelete')

botonBorrar.click(()=>{
    let input = inputBorrar.val()
    if(input > 6 || input < 1)      return alert('Lo siento , no existe un amigo con ese id')
    const urlAmigoId = `${URL_BASE}/amigos/${input}`
    $.ajax({
        url: urlAmigoId,
        type: 'DELETE',
        success:() =>{
            console.log('Ya lo borré')
        },
        error:() => {
            console.log('No lo pude borrar')

        }
    })
})






