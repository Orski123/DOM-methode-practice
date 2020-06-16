let bodyElement = document.querySelector ("body")



// create button element
let btnElement = document.createElement ('button')
btnElement.id ='btn'
btnElement.append ('click me')
btnElement.style.width = "75px"
btnElement.style.height= "35px"
bodyElement.appendChild(btnElement)

// create main element
let mainElement = document.createElement ('main')
bodyElement.appendChild(mainElement)

// create <img> element
let imgElement=document.createElement('img')
imgElement.src="https://imgprod65.hobbylobby.com/d/bc/3e/dbc3e42b3a469e16f3c06a1a1d2ee848d74d061f/350Wx350H-698720-0319.jpg"
imgElement.className='image'

mainElement.appendChild(imgElement)

// create <a> element
let aElement = document.createElement('a')
aElement.append ("See more peonies on pinterest")
aElement.href = 'https://www.pinterest.com/search/pins/?q=Peony&rs=typed&term_meta[]=Peony%7Ctyped'
Element.className ="link"
mainElement.appendChild(aElement)

// add eventlistener to remove main element
document.getElementById('btn').addEventListener("click", function()
{
mainElement.remove()
})