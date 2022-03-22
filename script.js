//retrieve elements

const $form = document.getElementById('form')
const $name = document.getElementById('name')
const $employ = document.getElementById('employ')
const $text = document.getElementById('text')
const $terms = document.getElementById('terms')
const $today = document.getElementById('today')
const $save = document.getElementById('save')
const $submit = document.getElementById('submit')
const $saved = document.getElementById('saved')
const $alert =document.getElementById('alert')
const $modal = document.getElementById('modal')

const today = new Date()

const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
}


$form.addEventListener('submit', function (e) {
    
        e.preventDefault()
        const name = $name.value
        const employ = $employ.value
        const text = $text.value

        $saved.textContent = `Last Saved on: ${today.toLocaleString('en-CA', options)}`
        
        //create a data object
        const data = {
            name: name,
            employ: employ,
            text: text,
            terms: $terms.checked,
            timestamp: today.getTime()
        }
        localStorage.setItem('savedDate', JSON.stringify(data))

    
})
const ls = localStorage.getItem('savedDate')

if (ls) {
    const data = JSON.parse(ls)
    const name = data.name
    const employ = data.employ
    const text = data.text
    $terms.checked = data.terms
    const datetime = new Date(data.timestamp)
    $saved.textContent = `Last Saved on: ${today.toLocaleString('en-CA', options)}`
    $name.value = name
    $employ.value = employ
    $text.value = text
    

}

$form.addEventListener('click', function (e){
    //console.log(e.target)
    if(e.target.classList.contains('submit')){
        e.preventDefault()
        localStorage.removeItem('savedDate')
        $form.reset()
        localStorage.clear()
       //$saved.style.display="none"
       $modal.style.display="block"
       $saved.textContent = ``

    }
    

})
$modal.addEventListener('click',function(e){
    //console.log(e.target.dataset)
    if(e.target.dataset.bsDismiss === 'alert'){
        $modal.style.display ='none'
    }
})
