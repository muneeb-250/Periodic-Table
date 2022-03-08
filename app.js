const allElements = document.querySelectorAll('td')
const legends = document.querySelectorAll('li')
//  To highlight the selected type of elements 

const selectElements = (legend) =>  {
    allElements.forEach(element=>{
        if(element.getAttribute(`${legend.className}`)===''){
            element.classList.toggle('selected')
        }
    })
}
legends.forEach(legend=>{
    legend.addEventListener('mouseover',()=>selectElements(legend))
    legend.addEventListener('mouseout',()=>selectElements(legend))
})