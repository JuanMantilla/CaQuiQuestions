<?php

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
    if (session('data')){
        return redirect('home');
    }
    else{
        return view('login_form');
    }

});

Route::get('/register', function () {
    return view('register');
});
Route::get('/home', function () {
    $routes = App\Route::all();
    return view('home')->with('routes', $routes);
})->name('home');

Route::get('/user/{id}/questionaries', 'Questionaries@getByUser');
Route::get('/logout', 'Auth\LoginController@logout');


