<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
});

// Route::middleware('jwt.auth')->get('users', function () {
//     return auth('api')->user();
// });


Route::get('auth/', 'Auth\LoginController@authenticate');

// Route::match(['post', 'options'], 'api/...', 'Api\XController@method')->middleware('cors');
// Route::get('user/{id}/questionaries', 'Questionaries@getByUser')->middleware('cors');



Route::post('user/', 'UserController@register');

Route::group([

    'middleware' => 'jwt.auth',

], function ($router) {
    Route::get('user/', 'UserController@index');
   
    Route::resource('questionary', 'Questionaries');
    Route::resource('question', 'Questions');
    Route::get('question/questions_questionary/{id}', 'Questions@getByQuestionary');
});


