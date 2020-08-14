<?php
//Cargando clases
use App\Http\Middleware\ApiAuthMiddleware;

Route::get('/welcome', function () {
	return view('welcome');
});

//Rutas para el controlador de "userController"
Route::post('/user/register', 'userController@register');

Route::post('/user/login', 'userController@login');
Route::put('/user/update', 'userController@update');
Route::post('/user/upload', 'userController@upload')->middleware(ApiAuthMiddleware::class);
Route::get('/user/getImage/{filename}', 'userController@getImage');
Route::get('/user/detail/{id}', 'userController@detail');

//Rutas para el controlador de "categoryController"
Route::resource('/categories', 'categoryController');

//Rutas para el controlador del "POST" (Entradas)
Route::resource('/post', 'postController');
Route::post('/post/upload', 'postController@upload');
Route::get('/post/image/{filename}', 'postController@getImage');
Route::get('/post/category/{id}', 'postController@getPostsByCategory');
Route::get('/post/user/{id}', 'postController@getPostsByUser');
