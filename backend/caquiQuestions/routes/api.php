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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::match(['post', 'options'], 'api/...', 'Api\XController@method')->middleware('cors');
// Route::get('user/{id}/questionaries', 'Questionaries@getByUser')->middleware('cors');
Route::get('user/{id}/questionaries', array('middleware' => 'cors', 'uses' => 'Questionaries@getByUser'));
Route::get('user/', 'User@get');
