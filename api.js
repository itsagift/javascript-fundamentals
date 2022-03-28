let div = document.getElementById("container")

const request = async () => {
    let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json")
    let res = await req.json()
    res.forEach((element) => {
        let img = document.createElement("img");
        let button = document.createElement("button");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        h3.innerText = element.company_name;
        h4.innerText = `Vacancies: ${element.vacancies}`
        button.innerText = `Rent Building ${element.id}`;
        img.setAttribute('src', element.photo);
        div.append(h3, h4, img, button);
        button.addEventListener("click", ()=>{
            let updatedVacancies = --element.vacancies;
            if (updatedVacancies <= -1) return alert("No more vacancies");
            h4.innerText = `Vacancies: ${updatedVacancies}`
        })
    })
    console.log('Response', res)
}

request()