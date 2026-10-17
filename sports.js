async function getSportsData() {
    var sportsApiKey='43789d1afd62b31108210eb76122df16'
  var myHeaders = new Headers();
myHeaders.append("x-apisports-key", sportsApiKey);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var response = await fetch("https://v3.football.api-sports.io/fixtures?live=all&timezone=Africa/Cairo", requestOptions)
var data = await response.json()


for (var i = 0; i < 5 && i < data.response.length; i++) {
        var matchRow = document.createElement('div')
        matchRow.classList.add('mb-3')


        var matchContent = `
            <h6>
                <img src="${data.response[i].league.logo}" style="width: 25px;" alt="">
                ${data.response[i].league.name}
            </h6>
            <div class="row align-items-center">
                <p class="col-4 mb-0">
                    <img src="${data.response[i].teams.home.logo}" style="width: 30px;" alt="">
                    <br>${data.response[i].teams.home.name}
                </p>
                <p class="col-4 mb-0 fw-bold fs-5">
                    ${data.response[i].goals.home} : ${data.response[i].goals.away}
                </p>
                <p class="col-4 mb-0">
                    <img src="${data.response[i].teams.away.logo}" style="width: 30px;" alt="">
                    <br>${data.response[i].teams.away.name}
                </p>
            </div>
        `
        matchRow.innerHTML=matchContent

        document.getElementById('live-matches').appendChild(matchRow)

    
}
}