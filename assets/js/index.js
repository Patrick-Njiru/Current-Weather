document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    
    
    form.addEventListener ('submit', e => {
    e.preventDefault()
    results(e.target.city_name.value)
    form.reset()
    })

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=087d2d5670b960565c41ce98b2fb0cfa`)
        .then(response => response.json())
        .then(data => {
            const city = data['name'],
            temperature = data['main']['temp'],
            description = data['weather'][0]['description'],
            cloud = data['clouds']['all'],
            humidity = data['main']['humidity'],
            wind = data['wind']['speed']
            
            console.log(data);
            document.getElementById('city').innerHTML = `Region <br> <br> ${city}`
            document.getElementById('temp').innerHTML=`Temperature <br><br> ${Math.floor(temperature-273.15)}<sup>o</sup>C `
            document.getElementById('description').innerHTML=`Description <br><br>${description}`
            document.getElementById('clouds').innerHTML=cloud + '%'
            document.getElementById('humidity').innerHTML=humidity + '%'
            document.getElementById('wind').innerHTML=wind + 'km/h'

            
        })
        .catch(error => error)

    function results(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=087d2d5670b960565c41ce98b2fb0cfa`)
        .then(response => response.json())
        .then(data => {
            const city = data['name'],
            temperature = data['main']['temp'],
            description = data['weather'][0]['description'],
            cloud = data['clouds']['all'],
            humidity = data['main']['humidity'],
            wind = data['wind']['speed']
            
            console.log(data);
            document.getElementById('city').innerHTML = `Region <br> <br> ${city}`
            document.getElementById('temp').innerHTML=`Temperature <br><br> ${Math.floor(temperature-273.15)}<sup>o</sup>C `
            document.getElementById('description').innerHTML=`Description <br><br>${description}`
            document.getElementById('clouds').innerHTML=cloud + '%'
            document.getElementById('humidity').innerHTML=humidity + '%'
            document.getElementById('wind').innerHTML=wind + 'km/h'

            
        })
        .catch(error => document.getElementById('main_container').innerHTML= error)
    }

    const toDoForm = document.getElementById('tasksform')
    toDoForm.addEventListener('submit', e => {
        e.preventDefault()
        addToDo(e.target.task.value)
        toDoForm.reset()
    })

    function addToDo(task) {
        const ul= document.getElementById('list')
        const li = document.createElement('li')
        if(task === '') {
            return
        }
        li.innerText = task
        ul.appendChild(li)
    }
})

