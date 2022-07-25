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

        return redirect('/admin/signin')->with('message', 'Login failed!');
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

        return redirect('/admin/signin')->with('message', 'Registration seccessfull! Please login');
    }

    public function index()
    {
        $books = Book::latest();

        if(request('search')){
            $books->where('title', 'like', '%' . request('search') . '%')
            ->orWhere('author', 'like', '%' . request('search') . '%');
        }

        return Inertia::render('Admin/AdminDashboard', [
            'name' => auth()->user()->name,
            'categories' => Category::all(),
            'books' => $books->paginate(10)->withQueryString()
        ]);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|unique:books|max:255',
            'description' => 'required',
            'author' => 'required',
            'link' => 'required',
            'category_id' => 'required',
        ]);

        Book::create($validatedData);

        return redirect('/admin/dashboard')->with('message', 'New book has been added!');
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

        Book::where('id', $request->id)->update($validatedData);

        return redirect('/admin/dashboard')->with('message', 'Book has been updated!');
    }

    public function delete(Request $request,Book $book)
    {
        // Book::destroy($request->id);

        // sg iki kenek
        $post = Book::findOrFail($request->id);
        
        $post->delete();

        return redirect('/admin/dashboard')->with('message', 'Book has been deleted!');
    }

    public function test()
    {
        return view('test');
    }

    public function test2(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email:dns|unique:admins',
            'password' => 'required|min:5|max:255'
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        Admin::create($validatedData);

        return redirect('/test/signin')->with('message', 'Registration seccessfull! Please login');
    }

    public function test3()
    {
        return view('test2');
    }

    public function test4(Request $request)
    {
        if(Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password]))
        {
            $request->session()->regenerate();
            return redirect()->intended('/test/dashboard');
        }

        return back()->with('message', 'Login failed!');
    }

    public function test5()
    {
        return view('test3');
    }

    public function test6(Request $request)
    {
        Auth::guard('admin')->logout();
     
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();
     
        return redirect('/test/signin');
    }
}
