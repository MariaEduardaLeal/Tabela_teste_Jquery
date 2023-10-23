$(document).ready(function() {
    // Realizar a requisição Ajax para buscar os dados do arquivo PHP
    $.ajax({
        type: "GET",
        url: "teste_map_e_arrow.php",
        dataType: "json",
        success: function (data) {
            // Limpa o tbody da tabela antes de adicionar os novos dados
            $("#tabela_de_preco tbody").empty();

            let linhasDaTabela = $.map(data, function (item) {
                console.log(item);
                let linha = "<tr>";
                linha += "<td>" + item.nome + "</td>";
                linha += "<td>" + item.preco + "</td>";
                linha += "</tr>";
                return linha;
            });

            $("#tabela_de_preco tbody").append(linhasDaTabela);
        }, 
        error: function (error) {
            console.error("Erro na requisição Ajax: " + error)
        }
    });

    $("#filtro_produto").on("click", function () {
        const filtroTexto = $("#nome_produto").val().toLowerCase();

        $("#tabela_de_preco tbody tr").each(function () {
            const produto = $(this).find("td:eq(0)").text().toLowerCase();
            if (produto.includes(filtroTexto)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
