import swal from 'sweetalert2'

const alertPrompt = async (message,callback) => {
  const result = await swal.fire({
    icon: 'question',
    title: '¿Seguro?',
    text: message,
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Continuar'
  })
  if(result.isConfirmed){
    callback()
  }
}

export default alertPrompt