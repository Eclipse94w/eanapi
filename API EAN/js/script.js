const bouton = document.getElementById("bnt-search")
bouton.addEventListener("click", () => {
    const ean = document.getElementById("input-ean").value.trim()
    let url = `https://world.openfoodfacts.org/api/v0/product/${ean}.json`
    axios.get(url).then(datas => {
        const trouve = datas.status
        if (trouve == 0) {
            alert("produit non référencé")
            return
        }

        const produit = datas.data.product
        console.log(datas)


        let html = `
        <div class="col d-flex justify-content-center">
        <article class="col-md-2" produit.id>
        <div class="card text-center border-dark mb-3" style="width: 18rem;">
                <img src="${produit.image_url}" alt="card-img-top" width: 16rem;>
                <div class="card-body">
                    <h5 class="card-title">${produit.product_name_fr}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> Marque : ${produit.brands}</h6>
                    <hr>
                    <img src="https://static.openfoodfacts.org/images/misc/nutriscore-${produit.nutriscore_grade}.png" alt="card-img-top" height= "90" width= "130">
                   
                    <button type="button" onclick="deleteitem(this)" class="btn btn-danger "> Supprimer </button>
                </div>
                </div>
            </div>
        </article>`

        var liste = document.getElementById("liste-produit")
        liste.innerHTML += html




    })

})

function deleteitem(html) {
    html.parentElement.parentElement.parentElement.remove()
}