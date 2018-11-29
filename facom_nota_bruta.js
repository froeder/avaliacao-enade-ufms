var ctx = document.getElementById('facom_nota_bruta').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

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
            label: "Nota bruta",
            backgroundColor: 'rgb(220,20,60, 0.6)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                56.5500,
                62.7720,
                55.2150,
                59.0917,
                66.6619
            ],
        }]
    },

    // Configuration options go here
    options: {}
});
