<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Produto;

// CONTROLLER (o "C" do MVC).
//
// Espelha o ProdutoController: recebe a requisição, pede os dados ao Model
// e escolhe qual View renderizar. Sem SQL escrito à mão e sem HTML aqui.
class CategoriaController extends Controller
{
    // Listagem: GET /categorias
    public function index()
    {
        $categorias = Categoria::orderBy('id')->get();

        return view('categorias.index', [
            'categorias' => $categorias,
        ]);
    }

    // Detalhe: GET /categorias/{id}
    public function show(int $id)
    {
        // findOrFail devolve 404 automaticamente se a categoria não existir.
        $categoria = Categoria::findOrFail($id);

        // O nome da categoria é o mesmo valor salvo na coluna `categoria`
        // de cada produto, então usamos isso para achar os produtos dela.
        $produtos = Produto::where('categoria', $categoria->nome)->get();

        return view('categorias.show', [
            'categoria' => $categoria,
            'produtos' => $produtos,
        ]);
    }
}
