<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    return Inertia::render('Begin');
});

Route::get('/test', function() {
    return view ('test');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//authentication
Route::get('/signin', [GoogleController::class, 'login'])->name('signin')->middleware('guest');
Route::post('/signout', [GoogleController::class, 'logout'])->name('signout');
Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('login');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
Route::get('/signup', function () {
    return Inertia::render('Register');
});

//dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');

require __DIR__.'/auth.php';