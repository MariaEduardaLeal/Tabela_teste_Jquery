<?php
//Conexão com o banco
$conexao = mysqli_connect('localhost', 'root', 'Xx19%32,', 'mercadinho');
if (!$conexao) {
    echo "Não é possível conectar";
}

//Executar a consulta SQL para buscar dados da tabela
$selecionar_produtos = "SELECT * FROM produtos";
$query = mysqli_query($conexao, $selecionar_produtos);


//Inicializa um array para armazenar os resultados
$data = ($query -> num_rows > 0 ? gravarInformacoesNoArray($query) : "Não tem itens no banco");

function gravarInformacoesNoArray($query_do_select){
    $data = array();
    while($linha = $query_do_select->fetch_assoc()){
        $data[] = $linha;
    }
    return $data;
}

echo json_encode($data);
?>