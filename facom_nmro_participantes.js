var ctx = document.getElementById('facom_nmro_participantes').getContext('2d');
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
            label: "Quantidade alunos por curso",
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                26,
                25,
                20,
                12,
                21
            ],
        }]
    },

    // Configuration options go here
    options: {}
});