<?php

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

Route::get('/', function () {
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

require __DIR__.'/auth.php';
<<<<<<< Updated upstream
=======

Route::get('/signin', function () {
    return Inertia::render('Login');
});

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('login');

Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);

Route::get('/signup', function () {
    return Inertia::render('Register');
});

Route::get('/landing-page', function () {
    return Inertia::render('LandingPage');
});

>>>>>>> Stashed changes
