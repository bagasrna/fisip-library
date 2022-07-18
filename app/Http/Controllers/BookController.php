<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage', [
            'name' => auth()->user()->name,
            'books' => Book::all(),
            'categories' => Category::all()
        ]);
    }

    public function test()
    {
        return view ('test', [
            'books' => Book::all()
        ]);
    }
}
