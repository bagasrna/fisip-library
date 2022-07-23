<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Category;
use App\Models\Book;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function login()
    {
        return Inertia::render('Admin/LoginAdmin');
    }

    public function authenticate(Request $request)
    {
        if(Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password]))
        {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }

        return back()->with('loginError', 'Login failed!');
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
     
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();
     
        return redirect('/admin/signin');
    }

    public function register()
    {
        return Inertia::render('Admin/RegisterAdmin');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email:dns|unique:admins',
            'password' => 'required|min:5|max:255'
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        Admin::create($validatedData);

        return redirect('/admin/signin')->with('success', 'Registration seccessfull! Please login');
    }

    public function index()
    {
        return Inertia::render('Admin/AdminDashboard', [
            'name' => auth()->user()->name,
            'categories' => Category::all() 
        ]);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'author' => 'required',
            'link' => 'required',
            'category_id' => 'required',
        ]);

        Book::create($validatedData);

        return redirect('/admin/dashboard')->with('success', 'New book has been added!');
    }

    public function update(Request $request, Book $book)
    {
        $rules = [
            'title' => 'required|max:255',
            'description' => 'required',
            'author' => 'required',
            'link' => 'required',
            'category_id' => 'required',
        ];

        $validatedData = $request->validate($rules);

        Book::where('id', $book->id)->update($validatedData);

        return redirect('/admin/dashboard')->with('success', 'Book has been updated!');
    }

    public function delete(Book $book)
    {
        Book::destroy($book->id);

        return redirect('/admin/dashboard')->with('success', 'Book has been deleted!');
    }
}
