$(document).ready(function() {
    // Realiza a requisição Ajax para buscar os dados do arquivo PHP
    $.ajax({
        type: "GET",
        url: "teste_map_e_arrow.php", // URL do arquivo PHP que fornece os dados
        dataType: "json", // Espera dados no formato JSON
        success: function (data) {
            // Limpa o tbody da tabela antes de adicionar os novos dados
            $("#tabela_de_preco tbody").empty();

            // Mapeia os dados recebidos em linhas da tabela
            let linhasDaTabela = $.map(data, function (item) {
                console.log(item);

                // Cria uma nova linha da tabela
                let linha = "<tr>";
                linha += "<td>" + item.nome + "</td>"; // Coluna de Nome do Produto
                linha += "<td>" + item.preco + "</td>"; // Coluna de Preço do Produto
                linha += "</tr>";
                return linha;
            });

            // Adiciona as linhas geradas ao corpo da tabela
            $("#tabela_de_preco tbody").append(linhasDaTabela);
        }, 
        error: function (error) {
            console.error("Erro na requisição Ajax: " + error);
        }
    });

    // Adiciona um evento de clique ao botão de filtro
    $("#filtro_produto").on("click", function () {
        // Obtém o texto do filtro do campo de entrada
        const filtroTexto = $("#nome_produto").val().toLowerCase();

        // Percorre todas as linhas da tabela
        $("#tabela_de_preco tbody tr").each(function () {
            // Obtém o texto do produto na primeira célula(COLUNA DA TABELA - PRIMEIRA COLUNA) da linha
            const produto = $(this).find("td:eq(0)").text().toLowerCase();

            // Compara o texto do produto com o texto do filtro
            if (produto.includes(filtroTexto)) {
                // Se o produto contém o filtro, exibe a linha
                $(this).show();
            } else {
                // Caso contrário, oculta a linha
                $(this).hide();
            }
        });
    });
});
