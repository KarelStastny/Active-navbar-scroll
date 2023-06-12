let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("nav ul li a ")



// Při scrolování pustí funkci
window.onscroll = () =>{

    // 
    sections.forEach( sec =>{
        // Jak delko jsme od shora
        let top = window.scrollY

        // Jak delko se nachází další sekce
        let offset = sec.offsetTop-150

        // Šířka
        let height = sec.offsetHeight

        // Získá Id sekce
        let id = sec.getAttribute("id")

        // Měnění v navigaci třídy active
        if(top >= offset && top < offset + height){
            navLinks.forEach( links => {
               
                // Odstraní clasu actvie a přidá jí znova vyhovujícímu ID
                links.classList.remove("active")
                document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active")

            })
        }
    })
}