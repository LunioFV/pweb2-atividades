<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Produto;

// CONTROLLER de Categorias — espelha o ProdutoController.
// Pede os dados ao Model e escolhe a View. Sem SQL e sem HTML aqui.
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
        // findOrFail devolve 404 automaticamente (ex.: /categorias/999).
        $categoria = Categoria::findOrFail($id);

        // O nome da categoria é o mesmo valor da coluna `categoria` de produtos.
        $produtos = Produto::where('categoria', $categoria->nome)->get();

        return view('categorias.show', [
            'categoria' => $categoria,
            'produtos' => $produtos,
        ]);
    }
}
