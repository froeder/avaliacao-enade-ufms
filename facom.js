var ctx = document.getElementById('facom').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [
            "CIÊNCIA DA COMPUTAÇÃO (BACHARELADO)",
            "TECNOLOGIA EM REDES DE COMPUTADORES",
            "TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
            "ENGENHARIA DA COMPUTAÇÃO",
            "SISTEMAS DE INFORMAÇÃO"
        ],
        datasets: [{
            label: "Cursos FACOM",
            backgroundColor: 'rgb(220,20,60, 0.6)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                4.2572,
                3.8271,
                3.7043,
                3.6435,
                3.3788
            ],
        }]
    },

    // Configuration options go here
    options: {}
});